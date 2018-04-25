import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Login from './Login'
import Tab from './Tab'
import TextField from './TextField'
import Backwards from './Backwards'

ReactDOM.render(<div>
  <Tab/>
  <Login/>
  <TextField/>
  <Backwards/>
</div>, document.getElementById('root'));
registerServiceWorker();
