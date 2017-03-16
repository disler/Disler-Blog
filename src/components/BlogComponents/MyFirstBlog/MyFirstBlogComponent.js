import React, { Component } from 'react';
import './MyFirstBlogComponent.css';
import BigHeader from '../../BigHeader/BigHeader'

class MyFirstBlogComponent extends Component
{
	render(){
		return (
			<div className="MyFirstBlogComponent-wrapper">
				<BigHeader sTitle={this.props.oBlog.sHeader} sDescription={this.props.oBlog.sDescription} sImg={this.props.oBlog.sBackdrop} />
				MyFirstBlogComponent

				<div className="MyFirstBlog-header-container">
					
				</div>
				<div className="MyFirstBlog-content">
					<div className='MyFirstBlog-date'>{this.props.oBlog.dtCreated.toString()}</div>
					<div className='blog-block'>
						Block of text here to start the blog
					</div>
				</div>
			</div>
		);
	}
}

export default MyFirstBlogComponent;