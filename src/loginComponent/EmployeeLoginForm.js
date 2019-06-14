import React, { Component } from 'react'
import 'mdbreact/dist/css/mdb.css' 
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import {MDBContainer,MDBRow,MDBCol,MDBBtn,MDBInput} from 'mdbreact'
import TextField from '@material-ui/core/TextField';
class EmployeeLoginForm extends Component{
	constructor(props){
		super(props)
		this.state={
			id:"",
			password: "",
			type: "emp"
		}
	}

	onChangeHandler=(e)=>{
		this.setState({[e.target.name]: e.target.value});
	}

	onsubmit=()=>{
		this.props.onsubmit(this.state)
	}

	render(){

		return (
				<MDBContainer>
			      <MDBRow>
			        <MDBCol md="6" lg="12">
			          <form>
			            <p className="h4 text-center mb-4">Sign in Employee</p>
			            <MDBInput
			              type="email"
			              name="id"
			              id="employee_id"
			              className="form-control"
			              value={this.state.employee_id}
			              label="Enter Your Employee Id"
			              onChange={this.onChangeHandler}
			            />
			            <MDBInput
			              type="password"
			              name="password"
			              id="employee_password"
			              className="form-control"
			              label="Enter Your password"
			              value={this.state.password}
			              onChange={this.onChangeHandler}
			            />
			            <div className="text-center mt-4">
			              <MDBBtn color="primary" onClick={this.onsubmit}>Login Employee</MDBBtn>
			            </div>
			          </form>
			        </MDBCol>
			      </MDBRow>
			    </MDBContainer>
			);
	}
}

export default EmployeeLoginForm;