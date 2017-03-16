import React, { Component } from 'react';
import './BlogHeader.css';

class BlogHeader extends Component
{
	render(){
		return (
			<div className="blog-header-wrapper">
				<div className='blog-header-container'>
					<div className='blog-bg-container'>
						<img src="./bg.jpg" alt=""/>
					</div>
					<div className='blog-header-title-container'>
						Daniel Isler's Blog
						<br/>
						<span>Sharing a few pieces of my mind</span>
						<br/>
						<span className="blog-header-sub-sub-span">
							<span className="red b">Programming </span><br/>
							<span className="green">Music </span><br/>
							<span className="blue">Life </span>
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default BlogHeader;