import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/news_logo.png';
import '../../App.css';
import '../../index.css'

const Menu = () => (
        <div className="rectangle">
          <menu className="news-logo"><img className="news-logo" src={ logo } alt=""/></menu>
          <menu className="news-now">News Now</menu>
          <menu className="home"><Link to='/'>Home</Link></menu> 
          <menu className="about-us"><Link to='/about'>About Us</Link></menu>
          <menu className="news-sources"><Link to='/sources'>News Sources</Link></menu>
          <menu className="contact-us">Contact Us</menu>
    </div>
)

export default Menu;