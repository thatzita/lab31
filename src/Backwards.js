import React from 'react';

class Backwards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      shifting: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }
  handleChange(event) {
    let alfabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z","å","ä","ö","A","B","C","D","E","F",
    "G", "H", "I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "Å","Ä","Ö"];

    let newValue;
    console.log(typeof Number(this.state.shifting))

    for(let i=0; i< alfabet.length; i++){
        if(event.key === "ö"){
          newValue = "a"
          this.setState({value: this.state.value + newValue});
          break;
        }else if(event.key === "Ö"){
          newValue = "A"
          this.setState({value: this.state.value + newValue});
          break;
        }else if(event.key === alfabet[i]){
        newValue = alfabet[i+Number(this.state.shifting)]
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
