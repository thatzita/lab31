import React from 'react';
import Login from "./Login"
import TextField from "./TextField"
import Backwards from "./Backwards"
import GuessingGame from "./GuessingGame"



class Tab extends React.Component {

  constructor(props){
    super(props);
    this.state= {val: "", lastVal:"", bool: false};
    this.componentSwitcher = this.componentSwitcher.bind(this);
  }

  //Funktion för att byta mellan komponenterna
  componentSwitcher(val){

      let change = ""

      if(val === this.state.lastVal && this.state.bool){
        change = ""
        this.setState({
          bool:false
        })
      }else{
        if(val === "Login"){
          change = <Login/>
          this.setState({
            lastVal: "Login"
          })
        }else if(val === "Text"){
          change = <TextField/>
          this.setState({
            lastVal: "Text"
          })
        }else if(val === "Back"){
          change = <Backwards/>
          this.setState({
            lastVal: "Back"
          })
        }else if(val === "Guess"){
          change = <GuessingGame/>
          this.setState({
            lastVal: "Guess"
          })
        }
        this.setState({
          bool:true
        })

      }



      //Ändrar värdet till det man klickar på
      this.setState({
        val : change
      })
    }

  render() {

    return (

      <div>
        <ul>
          <li onClick={ e => this.componentSwitcher("Login")}>Log in</li>
          <li onClick={ e => this.componentSwitcher("Text")}>Text field</li>
          <li onClick={ e => this.componentSwitcher("Back")}>Backwards</li>
          <li onClick={ e => this.componentSwitcher("Guess")}>Guessing game</li>
        </ul>


        <div className="currentState">
          {this.state.val}
        </div>

    </div>
    )
  }
}

export default Tab;

// <Login/>
// <TextField/>
// <Backwards/>
// <GuessingGame/>
