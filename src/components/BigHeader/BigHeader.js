import React, { Component } from 'react';
import './BigHeader.css';

class BigHeader extends Component
{
	render(){
		return (
			<div className="big-header-wrapper">
				<div className='big-header-container'>
					<div className='big-bg-container'>
						<img src={this.props.sImg} alt="REAPLCE "/>
					</div>
					<div className='big-header-title-container'>
						{this.props.sTitle}
						<br/>
						<span>{this.props.sDescription}</span>
						<br/>
					</div>
				</div>
			</div>
		);
	}
}

export default BigHeader;