import React, { Component } from 'react';

export default class PostForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			title: '',
			body: ''
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onChange(e){
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	onSubmit(e){
		e.preventDefault();
		console.log(this.state);
	}

	render (){
		return (
			<form onSubmit={this.onSubmit}>
				<div className="form-group">
					<label>Title:</label>
					<input type="text" name="title" onChange={this.onChange} value={this.state.title} className="form-control" />
				</div>
				<div className="form-group">
					<label>Body:</label>
					<textarea name="body" onChange={this.onChange} value={this.state.body} cols="30" rows="10" className="form-control"></textarea>
				</div>
				<div className="form-group">
					<button type="submit" className="btn btn-success">Them moi</button>
				</div>
			</form>
		);
	}
}

