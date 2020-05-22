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

	// resets data arr when req a new query
	useEffect(() => {
    setBooks([])
  }, [query])

	useEffect(() => {
		setLoading(true)
		setError(false)
		let cancel
		axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken(c => cancel = c) // react-debounce-input as drop-in replacement to have delay when the user stops typing
    })
		.then(res => { // return old results with new results but only unique titles
			setBooks(prevBooks => {
				// prevent dups in res by using set, then convert back to arr with spread operator
				return [...new Set([...prevBooks, ...res.data.docs.map(book => book.title)])]
			})
			setHasmore(res.data.docs.length > 0); // don't requery when no more results are found
			setLoading(false);
		})
		.catch(err => {
			if (axios.isCancel(err)) return
			setError(true);
		})
		return () => cancel()
	}, [query, pageNumber]);

	return {loading, error, books, hasMore}
}

const InfiniteScroll = () => {
	const [query, setQuery] = useState('');
	const [pageNumber, setPageNumber] = useState(1);

	const {loading, error, books, hasMore} = useSearch(query, pageNumber)

	const observer = useRef()
	const lastElement = useCallback(node => {
		if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) { //if last el result is on the screen and there is more data available
        setPageNumber(prevPageNumber => prevPageNumber + 1) // when last element is shown on screen, increment page number
      }
		})
		if (node) observer.current.observe(node) // if we have an actual last el result, update the current 
	}, [loading, hasMore]) // list of dependencies to be returned

	const onInputChange = (event) => {
		setQuery(event.target.value)
		setPageNumber(1) // results to start at first page
	}

	return (
		<>
			<h1>Let the Scroll be Infinite</h1>
			<input type='text' value={query} onChange={onInputChange} />
			{books.map((book, index) => {
				if (books.length === index + 1) {
					return <div key={book} ref={lastElement}>{book}</div>
				} else {
					return <div key={book}>{book}</div>
				}
			})}
			<div>{loading && 'Loading..'}</div> {/* if loading, place loading text */}
			<div>{error && 'Error'}</div>
		</>
	);
}

ReactDOM.render(<InfiniteScroll />, document.getElementById('root'));