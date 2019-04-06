import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

export default class App extends Component {

  render() {
    return (
      <div>
        Signup
        {/* todo: need email input 
            todo: need password input 
            todo: need onsubmit that sends POST :8080/api/users with body of new user: 
            "user": {
              "email": String,
              "password": String
            }
            todo: acquire token and save to cookie for session
            todo: use cookie and login user into site
        */}
        Login
        {/* todo: need email input 
            todo: need password input 
            todo: need onsubmit that sends POST :8080/api/users/login with body of user: 
            "user": {
              "email": String,
              "password": String
            }
            todo: acquire token and save to cookie for session
            todo: use cookie and login user into site
        */}
        
      </div>
    );
  }
}
