import React, { Component } from 'react';

class ExportEmployeeIdField extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<input type="text" id={this.props.i}/>
		)
	}
}

export default ExportEmployeeIdField;