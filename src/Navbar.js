import React, { Component } from 'react';
import {ReactNavbar} from 'react-responsive-animate-navbar';
import logo from './navlogo.png';




class Navbar extends Component {
  render () {
    return (
        <ReactNavbar
        color="rgb(25, 25, 25)"
        logo={logo}
        menu={[
          { name: "HOME", to: "/home" },
          { name: "OUR MENU", to: "/menu" },
          { name: "ORDER ONLINE", to: "/order" },
          { name: "ABOUT", to: "/about" },
        ]}
        social={[
          {
            name: "Facebook",
            url: "",
            icon: ["fab", "facebook-f"],
          },
          {
            name: "Instagram",
            url: "",
            icon: ["fab", "instagram"],
          },
        ]}
      />
    );
  }
}

export default Navbar;
