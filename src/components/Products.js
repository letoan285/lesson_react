import React, { Component } from 'react'

import './Products.css';


export default class Products extends Component {
	constructor(props){
		super(props);
		this.state = {
			status: 1,
			quantity: 0,
			price: 8000
		}

	}
	render (){
		const stock = 150
		return (
			<div className="Products">
				<h3>Products component</h3>
				
				<p>Selling Price: {this.state.price}</p>
				<span>stock: {stock}</span><br />
				<strong>{this.state.status}</strong>
			</div>
		);
	}
}