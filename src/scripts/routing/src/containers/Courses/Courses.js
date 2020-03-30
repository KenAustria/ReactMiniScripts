import React, { Component } from 'react';
import './Courses.css';

class Courses extends Component {
	state = {
		courses: [
			{ id: 1, title: 'Math' },
			{ id: 2, title: 'Science' },
			{ id: 3, title: 'Computer Science' }
		]
	}

	render () {
		return (
			<div>
				<h1>Courses</h1>
				<section className='Courses'>
					{
						this.state.courses.map(course => {
							return <article className='Course' key={course.id}>{course.title}</article>;
						})
					}
				</section>
			</div>
		);
	}
}

export default Courses;