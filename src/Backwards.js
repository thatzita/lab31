import React from 'react';

class Backwards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      shifting: 1,
      caps: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }
  handleChange(event) {
    let alfabetSmall = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z","å","ä","ö"];

    let alfabetBig = ["A","B","C","D","E","F",
    "G", "H", "I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "Å","Ä","Ö"];

    let newValue;
    for(let i=0; i< alfabetSmall.length; i++){
        if(event.key === "ö" && this.state.caps === false){
          newValue = "a";
          this.setState({value: this.state.value + newValue});
          break;
        }else if(event.key === "Ö" && this.state.caps === true){
          newValue = "A";
          this.setState({value: this.state.value + newValue});
          break;
        }else if(event.key === alfabetSmall[i] && this.state.caps === false && this.state.shifting <= 28){
        newValue = alfabetSmall[i+Number(this.state.shifting)]
        if(newValue === undefined){
          newValue = alfabetSmall[0+Number(this.state.shifting)]
        }
        this.setState({value: this.state.value + newValue});
        break;
      }else if(event.key === alfabetBig[i] && this.state.caps === true && this.state.shifting <= 28){
      newValue = alfabetBig[i+Number(this.state.shifting)]
      if(newValue === undefined){
        newValue = alfabetBig[0+Number(this.state.shifting)]
      }
      this.setState({value: this.state.value + newValue});
      break;
    }else if(event.keyCode === 32){
          newValue = " ";
          this.setState({value: this.state.value + newValue});
      }else if(event.keyCode === 8){
          this.setState({value: this.state.value.substring(0,this.state.value.length-1)});
      }
    }
    if(event.keyCode === 20){
      if(this.state.caps === false){
        this.setState({caps:true});
      }else if(this.state.caps === true){
        this.setState({caps:false});
      }
    }
 }
 handleChangeInput(event){
   this.setState({
     shifting: event.target.value
   })
 }
  render() {
    return (
      <div>
        <h3>Magic text. Write and see what happens</h3>
        <input type="text" onChange={this.handleChangeInput}/>
        <textarea  value={this.state.value} onKeyDown={this.handleChange} />
      </div>)
  }
}

export default Backwards;
