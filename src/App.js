import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Products from './components/Products';
import Posts from './components/Posts';
import Contact from './components/Contact';
import PostForm from './components/PostForm';


export default class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Route path="/" exact component={ Home }>Trang chủ</Route>
            <Route path="/products" component={ Products }>Sản phẩm</Route>
            <Route path="/posts" exact component={ Posts }>Tin tức</Route>
            <Route path="/posts/create" component={ PostForm }>Them moi</Route>
            <Route path="/contact" component={ Contact }>Liên hệ</Route>
          </div>
        </div>
      </Router>
    );
  }
}
