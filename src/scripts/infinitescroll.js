// filename: infinitescroll.js
// this file must be named index.js
import React, {useState, useEffect, useRef, useCallback} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const useSearch = (query, pageNumber) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [books, setBooks] = useState([]);
	const [hasMore, setHasmore] = useState(false);

	useEffect(() => {
		setBooks([]); // prevent old query results from rendering with new query results
	});

	useEffect(() => {
		setLoading(false)
		setError(false)
		let cancel
		axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken(c => cancel = c)
    })
		.then(res => { // return old results with new results but only unique titles
			setBooks(prevBooks => {
				return [...new Set([...prevBooks, ...res.data.docs.map(book => book.title)])]
			})
			setHasmore(res.data.docs.length > 0); // don't requery when no more results are found
		})
		.catch(err => {
			if (axios.isCancel(err)) return
			setError(true);
			console.log(err)
		})
		return () => cancel()
	}, [query, pageNumber]);

	return {loading, error, books, hasMore}
}

const InfiniteScroll = () => {
	const [query, setQuery] = useState(0);
	const [pageNumber, setPageNumber] = useState(0);

	const {loading, error, books, hasMore} = useSearch(query, pageNumber)

	const observer = useRef()
	const lastElement = useCallback(node => {
		if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
		})
		if (node) observer.current.observe(node)
	}, [loading, hasMore])

	const onInputChange = event => {
		setQuery(event.target.value)
		setPageNumber(1) // results to start at first page
	}

	return (
		<div>
			<h1>Let the Scroll be Infinite</h1>
			<input type='text' value={query} onChange={onInputChange} />
			{books.map((book, index) => {
				if (books.length === index + 1) {
					return <div key={book} ref={lastElement}>{book}</div>
				}
				return <div key={book}>{book}</div>
			})}
			<div>{loading && 'Loading..'}</div> {/* if loading, place loading text */}
			<div>{error && 'Error'}</div>
		</div>
	);
}

ReactDOM.render(<InfiniteScroll />, document.getElementById('root'));