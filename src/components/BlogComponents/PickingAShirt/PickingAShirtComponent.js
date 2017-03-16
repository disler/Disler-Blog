import React, { Component } from 'react';
import './PickingAShirtComponent.css';
import BigHeader from '../../BigHeader/BigHeader'

class PickingAShirtComponent extends Component
{
	render(){
		return (
			<div className="PickingAShirtComponent-wrapper">
				<BigHeader sTitle={this.props.oBlog.sHeader} sDescription={this.props.oBlog.sDescription} sImg={this.props.oBlog.sBackdrop} />
			</div>
		);
	}
}

export default PickingAShirtComponent; 