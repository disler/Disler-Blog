import React, { Component } from 'react';
import BlogComponent from '../BlogDisplay/BlogDisplay'
import BlogHeader from '../BlogHeader/BlogHeader'
import './Landing.css';

class Landing extends Component
{
	render(){
		return (
			<div className="Landing-wrapper">
				<div className="App-header">
                    <BlogHeader/>
                </div>
                <div className="content-container">
                    <BlogComponent oBlog={this.props.oBlog} funcChangeView={this.props.funcChangeView}/>
                </div>
			</div>
		);
	}
}

export default Landing;