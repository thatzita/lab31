import React from 'react';

class Backwards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    let alfabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z","å","ä","ö"];

    let newValue;
    for(let i=0; i< alfabet.length; i++){
      if(event.key === alfabet[i]){
        newValue = alfabet[i+1]
        this.setState({value: this.state.value + newValue});
        break;
      }else if(event.keyCode === 32){
          newValue = " ";
          this.setState({value: this.state.value + newValue});
      }else if(event.keyCode === 8){
          this.setState({value: this.state.value.substring(0,this.state.value.length-1)});
      }
    }
 }
  render() {
    return (<textarea  value={this.state.value} onKeyDown={this.handleChange} />)
  }
}

export default Backwards;
