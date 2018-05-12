import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Posts extends Component {
	constructor(props){
		super(props);
		this.state = {
			posts: []
		}

	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/posts')
		.then((res) => res.json())
		.then(data => this.setState({
			posts: data
		}));
	}
	render() {
		const postItems = this.state.posts.map(item => (
			<div key={ item.id }>
				<h3>{ item.title }</h3>
				<p>{ item.body }</p>
			</div>
		));
	    return (
	      <div className="Posts">
	      	<h1>THis is post component</h1>
	      	<Link to="/posts/create" className="btn btn-primary">Them moi</Link>
	      	{ postItems }
	      </div>
	    );
  }
}
