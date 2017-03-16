import React, { Component } from 'react';
import './BlogDisplay.css';

class BlogDisplay extends Component
{
	render(){
		const lstBlog = this.props.oBlog.lstBlog;
		const funcChangeView = this.props.funcChangeView;
		return (
			<div className="blog-display-container">
				{
					lstBlog.map((x, i) => {
						return (
							<div className='blog-container-iter' key={i} onClick={funcChangeView.bind(this, i)}>
								<div className='blog-img-container'>
									<img className="blog-thumbnail-img" src={x.sThumbnail} alt="thumbnail"/>
								</div>
								<div className='blog-right-container'>
									<div className='blog-header'>{x.sHeader}</div>
									<div className='blog-description'>{x.sDescription}</div>
									<div className='blog-tags'>{this.RenderTags(x.lstTag)}</div>
								</div>
							</div>
						);
					})
				}
			</div>
		);
	}

	RenderTags(lstTag)
	{
		return lstTag.map( (sTag, i) => {
			const sCssClass = sTag + "-tag-span tag-span";
			return (
				<span className={sCssClass} key={i}>{sTag}</span>
			);
		});
	}
}

export default BlogDisplay;