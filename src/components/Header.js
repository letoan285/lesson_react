import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render (){
		return (
			<nav className="navbar navbar-inverse">
				<div className="container-fluid">
					<ul className="nav navbar-nav">
						<li>
							<Link to="/">Trang chủ</Link>
						</li>
						<li>
							<Link to="/products">Sản phẩm</Link>
						</li>
						<li>
							<Link to="/posts">Tin tức</Link>
						</li>
						<li>
							<Link to="/contact">Liên hệ</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
export default Header;