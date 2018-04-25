import React from 'react';
// let loggedIn = "You are logged out";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: false
    }
    this.loggedIn = "Click to login";
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (!this.state.loginStatus) {
      this.setState({loginStatus: true})
      this.loggedIn = "You are logged in";
    } else {
      this.setState({loginStatus: false})
      this.loggedIn = "You are logged out";
    }
  }
  render() {
    return (<button onClick={this.handleClick}>{this.loggedIn}</button>)
  }
}

export default Login;
