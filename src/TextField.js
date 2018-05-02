import React from 'react';

class TextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enabledOrNot: "disabled"
    }
    this.changeValue = this.changeValue.bind(this);
  }
  changeValue() {
    if (this.state.enabledOrNot === "disabled") {
      this.setState({enabledOrNot: ""})
    } else {
      this.setState({enabledOrNot: "disabled"})
    }
  }
  render() {
    return (<div className="textFieldDiv">
      <h3>Enable or disable the textfield</h3>
      <input type="checkbox" className="radioBtn" onClick={this.changeValue}/>
      <input type="text" className="inputField" disabled={this.state.enabledOrNot}/>
    </div>)
  }
}

export default TextField;
