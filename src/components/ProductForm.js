import React, { Component } from 'react'

class ProductForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			price: '',
			description: '',
			status: ''
		}
		this.onSubmit = this.onSubmit.bind(this);
		this.onHandleChangeName = this.onHandleChangeName.bind(this);
		this.onHandleChangePrice = this.onHandleChangePrice.bind(this);
		this.onHandleChangeDesc = this.onHandleChangeDesc.bind(this);
		this.onHandleChangeStatus = this.onHandleChangeStatus.bind(this);

	}

	onHandleChangeName(e){
		this.setState({
			name: e.target.value
		})
	}
	onHandleChangePrice(e){
		this.setState({
			price: e.target.value
		})
	}
	onHandleChangeDesc(e){
		this.setState({
			description: e.target.value
		})
	}
	onHandleChangeStatus(e){
		this.setState({
			status: e.target.value
		})
	}
	onSubmit(e){
		e.preventDefault();
		console.log(this.state);
	}

	render (){
		return (
			<form onSubmit={this.onSubmit}>
				<div>
					<label>Tên sản phẩm</label><br/>
					<input 
						type="text" 
						placeholder="Tên sản phẩm..." 
						onChange={this.onHandleChangeName} 
					/>
				</div><br/>
				<div>
					<label>Giá</label><br/>
					<input 
						type="text" 
						placeholder="Gia sản phẩm..."
						onChange={this.onHandleChangePrice} 
					/>
				</div><br/>
				<div>
					<label>Mô tả</label><br/>
					<textarea name="" 
								onChange={this.onHandleChangeDesc}
								cols="20" 
								rows="5"
					></textarea>
				</div><br/>
				<div>
					<label>Trạng thái</label><br/>
					<select name="" id="" onChange={this.onHandleChangeStatus}>
						<option value="1">Hiển thị</option>
						<option value="-1">Không hiển thị</option>
					</select>
				</div><br/>
				<div>
					<button type="submit">Thêm mới</button>
				</div>
			</form>
		);
	}

}

export default ProductForm;