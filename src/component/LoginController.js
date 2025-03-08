import React, { Component } from 'react'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';


export default class LoginController extends Component {
    constructor(props){
        super(props);
        this.handleLoginConnector = this.handleLoginClick.bind(this);
        this.handleLogoutConnector = this.handleLogoutClick.bind(this);
        this.state = {isLogginIn: false};
    }

    handleLoginClick() {
        this.setState({isLogginIn: true});
    }

    handleLogoutClick(){
        this.setState({isLogginIn: false});
    }

  render() {
    const isLogginIn = this.state.isLogginIn;
    let button;

    if(isLogginIn){
        button = <LogoutButton onClick={this.handleLogoutConnector}></LogoutButton>
    } else {
        button = <LoginButton onClick={this.handleLoginConnector}></LoginButton>
    }
    return (
      <div>
        {button}
      </div>
    )
  }
}
