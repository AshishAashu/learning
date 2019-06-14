import React, { Component} from "react";
import axios from 'axios';
import UserList from './user_list';
import "bootstrap-css-only/css/bootstrap.min.css";
class Index extends Component{
	constructor(props){
		super(props);
		this.state={
			users: []
		}
	}
	componentDidMount(){
		axios.get("https://reqres.in/api/users").then(response => {
          // this.setState({ business: response.data });
          console.log(response.data);
          this.setState({users: response.data.data})
        })
        .catch(function (error) {
          console.log(error);
        })
	}
	userList(){
		return this.state.users.map((user,i)=>{
					return <UserList obj={user} key={i}/>
				});
	}
	render(){
		return(
				<div className="container">
					<table className="table">
						<tbody>
							{ this.userList() }
						</tbody>
					</table>
				</div>
		);
	}
}

export default Index;