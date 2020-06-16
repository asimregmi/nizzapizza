import React, { Component } from 'react';
import './Welcome.css'


class Welcome extends Component {
  render () {
    return (
      <div className='welcome-section'>
        <h1>WELCOME TO NIZZA PIZZA PASTA & SUBS.</h1>
        <h1>Dine In. Carry Out. Delivery.</h1>    
            <a className="f4 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-red" title='Location' target='_blank' rel="noopener noreferrer" href='https://goo.gl/maps/P4at5kAvvCDFfHHg8'><ion-icon name="location"></ion-icon> 1430 S Cooper St, Arlington</a>
            <a className="f4 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green" title='Call' href="tel: +18172745220"><ion-icon name="call"></ion-icon> 817 274 5220</a>
        </div>
    );
  }
}

export default Welcome;
