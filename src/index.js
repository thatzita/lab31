import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Login from './Login'
import Tab from './Tab'
import TextField from './TextField'
import Backwards from './Backwards'
import GuessingGame from './GuessingGame'

ReactDOM.render(<div>
  <Tab/>
  <Login/>
  <TextField/>
  <Backwards/>
  <GuessingGame/>
</div>, document.getElementById('root'));
registerServiceWorker();
