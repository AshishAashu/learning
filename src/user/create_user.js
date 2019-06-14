import React, { Component} from "react";
import axios from 'axios';
import "bootstrap-css-only/css/bootstrap.min.css";
class CreateUser extends Component{
	constructor(props){
		super(props);
		this.state={
			user: {}
		}
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onChange(e){
		let f = e.target.name;
		let user = this.state.user;
		switch(f){
			case "name":
				user.name = e.target.value
				this.setState({user: user});
				break;
			case "job":
				user.job = e.target.value
				this.setState({user: user});
				break;	
			default:
				break;	
		}
		console.log(this.state.user);
	}

	onSubmit(e){
		e.preventDefault();
		axios.post("https://reqres.in/api/users",this.state.user).then(response=>{
			console.log(response.data);
			this.props.history.push('/');
		});
	}

	render(){
		return(
				<div style={{marginTop: 10}}>
                <h3>Add New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>User Name:  </label>
                        <input type="text" name="name" onChange={this.onChange} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>User JOB: </label>
                        <input type="text" name="job" onChange={this.onChange} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register User" className="btn btn-primary"/>
                    </div>
                </form>
            	</div>
			);
	}
}	

export default CreateUser;
