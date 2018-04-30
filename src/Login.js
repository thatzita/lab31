import React from 'react';
// import Tab from "./Tab"

// let loggedIn = "You are logged out";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      loginStatus: !this.state.loginStatus
    })
  }

  render() {
    let btnText,
      divText;
    if (!this.state.loginStatus) {
      btnText = "Login";
      divText = "You are logged out";
    } else {
      btnText = "Logout";
      divText = "You are logged in";
    }
    return (<div>
      <button onClick={this.handleClick}>{btnText}</button><br/>
      <div className="divText">{divText}</div>
    </div>)
  }
}

export default Login;
