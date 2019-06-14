import React, { Component} from "react";
import axios from 'axios';
import "bootstrap-css-only/css/bootstrap.min.css";
class EditUser extends Component{
	constructor(props){
		super(props);
		this.state={
			user: {}
		}
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount(){
		axios.get("https://reqres.in/api/users/"+this.props.match.params.id).then(response => {
          // this.setState({ business: response.data });
          console.log(response.data);
          this.setState({users: response.data.data})
        })
        .catch(function (error) {
          console.log(error);
        })
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
			case "gender":
				user.gender = e.target.value
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
                <h3>Edit User:</h3>
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
                        <label>Gender : </label>
                        <select className="form-control" name="gender" onChange={this.onChange}>
                        	<option>--Select Gender--</option>
                        	<option value="male">Male</option>
                        	<option value="female">Female</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register User" className="btn btn-primary"/>
                    </div>
                </form>
            	</div>
			);
	}
}	

export default EditUser;
