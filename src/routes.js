import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateUser from './user/create_user'
import EditUser from './user/edit_user'
import IndexUser from './user/index'
class Routes extends Component{
	render(){
		return(
			<Switch>
              <Route exact path='/' component={ IndexUser } />
              <Route path='/create' component={ CreateUser } />
              <Route path='/edit/:id' component = { EditUser } />
            </Switch>
        );
	}
}

export default Routes;
