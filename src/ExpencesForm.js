import React, { Component } from 'react';
import ExportEmployeeIdField from './ExportEmployeeIdField'
import EmployeeLoginForm from './loginComponent/EmployeeLoginForm'
import AdminLoginForm from './loginComponent/AdminLoginForm'
import {MDBContainer,MDBRow,MDBCol} from 'mdbreact'
import 'bootstrap-css-only/css/bootstrap.min.css'
class ExpenceForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			id: "",
			password: "",
			type: ""
		};

	}

	setOnClickListener=(data)=>{
		Object.keys(data).map((keyName, i)=> this.setState({[keyName]: data[keyName]}))		
	}

	sendData=()=>{
		
	}

	render(){
		return (
			<MDBContainer style={{background: ""}}>	
				<MDBRow>
					<MDBCol lg="6">
						<EmployeeLoginForm onsubmit={this.setOnClickListener}/>
					</MDBCol>
					<MDBCol lg="6">
						<AdminLoginForm />
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			
		);
	}
}

export default ExpenceForm;