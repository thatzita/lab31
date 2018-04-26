import React from 'react';

class GuessingGame extends React.Component {

    constructor(props){
      super(props);
      this.state = {guess:0, nr: Math.floor(Math.random()*100+1), value: "", underHogre: "" };
      this.handleChange = this.handleChange.bind(this);
      this.guessNumber = this.guessNumber.bind(this);
    }

    guessNumber(val){

      let guesses = this.state.guess
      this.setState({
        guess: ++guesses
      })

      if(this.state.nr === Number(val)){
        console.log("räääättt")
        this.setState({
          underHogre: "RÄTT DU ÄR SOM JOHAN!!!!! <3 Talet var Johan nej jag skojar bara. Talet är " + this.state.nr +" Det tog dig " + this.state.guess + " gissningar",
          nr: Math.floor(Math.random()*100+1),
          guess: 0,
        })
      }else if( this.state.nr< Number(val)){
        console.log("feeel")
        this.setState({
          underHogre: "Feel du måste gissa lägre!!!!!"
        })
      }else if(this.state.nr>Number(val)){
        this.setState({
          underHogre: "Fel du måste gissa hööögre som Johan!!!!!"
        })
      }
    }

    handleChange(event){
      this.setState({value: event.target.value})
    }

  render() {

    let message = ""
    if (this.state.underHogre === "") {
      message = ""
    }

    return (
      <div>
        <h2>Gissa på talet mellan 1 och 100</h2>
        <h2>Du har gissat {this.state.guess}  gånger</h2>
        <h2>{this.state.underHogre}</h2>
        <input type="text"  value={this.state.value}  onChange={this.handleChange}/>
        <button onClick={e => this.guessNumber(this.state.value)}>Gissa!</button>
      </div>

    )
  }
}

export default GuessingGame;
