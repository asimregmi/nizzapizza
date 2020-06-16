import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Welcome from './Welcome';
import Menu from './Menu';
import About from './About';
import Order from './Order';
import Contact from './Contact';
import Footer from './Footer';




class App extends Component {

  render () {
    return (
      <div>

        <Navbar />
        <Welcome />
        <Menu />
        <Order />
        <About />
        <Footer />

    
      </div>
    );
  }
}

export default App;
