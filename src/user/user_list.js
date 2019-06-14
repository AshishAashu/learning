import React, { Component} from "react";
import {Link} from 'react-router-dom';
import "bootstrap-css-only/css/bootstrap.min.css";
class UserList extends Component{
	constructor(props){
		super(props);
		this.state={
			obj: this.props.obj
		}
		this.setFullName = this.setFullName.bind(this);
		this.onClick = this.onClick.bind(this);
	}
	setFullName(e){
		let full_name = "";
		for(let i=0;i<=1;i++){
			full_name += e.children[i].innerText+" ";
		}
		let item = this.state.obj
		item.full_name = full_name
		this.setState({obj: item});
		console.log(this.state);
		console.log(full_name.trim());
	}
	onClick(e){
		switch(e.target.tagName.toLowerCase()){
			case "td":
				this.setFullName(e.target.parentElement);
				break;
			case "button":
				this.setFullName(e.target.parentElement.parentElement);
				break;	
			case "tr":
				this.setFullName(e.target);
				break;	
			default:
				break;		
		}
	}
	render(){
		// first_name,last_name = this.state.obj
		// {this.state.obj.full_name ? 
				// 							<td>{this.state.obj.full_name}</td>
				// 						: <td><button className="btn" onClick={this.onClick}>Get Name</button></td>}
		return(
			<tr>
				<td>{this.state.obj.first_name}</td>
				<td>{this.state.obj.last_name}</td>
				
				<td>
					<Link to={"/edit/"+this.props.obj.id} className="btn btn-primary btn-sm">Edit</Link>
				</td>						
			</tr>
		);
	}
}

export default UserList;