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
    console.log(this.state.enabledOrNot)
    if (this.state.enabledOrNot === "disabled") {
      this.setState({enabledOrNot: ""})
    } else {
      this.setState({enabledOrNot: "disabled"})
    }
  }
  render() {

    return (<div className="textFieldDiv">
      <input type="checkbox" onClick={this.changeValue}/>
      <input type="text" disabled={this.state.enabledOrNot}/>
    </div>)
  }
}

export default TextField;
