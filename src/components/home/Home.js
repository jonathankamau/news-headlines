import React, { Component } from 'react';
import landingPageImage from '../../assets/images/man-coffee-cup-pen.jpg';
import '../App.css';
import '../../index.css'

class Home extends Component {
  render() {
    return (
      <div className="body">
        <div><img className="man-coffee-cup-pen" src={ landingPageImage } alt=""/></div>
    </div>
    );
  }
}

export default Home;