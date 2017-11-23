import React, { Component } from 'react';
import Menu from './components/common/Menu'
import Routes from './routes'
import './App.css';
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="body">
        <Menu/>
        <Routes/> 
    </div>
    );
  }
}

export default App;
