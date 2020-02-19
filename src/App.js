import React, {Component} from 'react';
import Header from './components/header.js';
import Staff from './components/staff.js';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Header />
        <Staff />
      </div>
    );
  }
}

export default App;
