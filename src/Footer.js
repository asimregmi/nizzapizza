import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <div>
        <div className='pa1-m pl5-l bg-near-black o-90 white'>
              <div className='mb0 cf'>
                  <h1 className="f2-ns w-100 pb3 f6 fw6 ttu tracked mb2 tc">Contact Us</h1>
                  <article className="fl w-50 dib-ns w-auto-ns mr4-m mr5-l mb0 pr2 pr0-ns pb3">
                      <span className="f3-ns grow f4-l db pb3 white"><a className='link white' title="Call" href="tel:+12075555555"><ion-icon size='small' name="call"></ion-icon> Call: 817 274 5220</a></span>
                      <span className="f3-ns grow f4-l db pb3 white"><ion-icon size='small' name="mail"></ion-icon><a className='link white' title='Email' href='mailto:nizzapizza@gmail.com'> Email: nizzapizza@gmail.com</a></span>
                      <span className="f3-ns grow f4-l db pb3 white"><ion-icon size='small' name="location"></ion-icon><a className='link white' title='Location' target='_blank' rel="noopener noreferrer" href='https://goo.gl/maps/P4at5kAvvCDFfHHg8'> 1430 S Cooper St., Arlington, TX 76013</a></span>
                      <span className='f3-ns f4-l db pb3 white'>
                          <a className='link white' href='#' target='_blank' rel="noopener noreferrer">
                              <ion-icon size='large' name="logo-facebook"></ion-icon>
                          </a>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          <a className='link white' href='#' target='_blank' rel="noopener noreferrer">
                              <ion-icon size='large' name="logo-instagram"></ion-icon>
                          </a>
                      </span>
                  </article>
                  <article className="fl w-50 dib-ns w-60-ns mr4-m mr5-l mb0 pr2 pr0-ns pb3">
                      <div style={{width: '100%'}}>
                          <iframe className='grow br4 shadow-2' title='Location Map' width="100%" height="160" src="https://maps.google.com/maps?width=100%&amp;height=160&amp;hl=en&amp;q=1430%20S%20Cooper%20St%2C%20Arlington%20TX+(Nizza%20Pizza)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                          </iframe>
                      </div>
                      <br />
                  </article>
              </div>  
          </div>

          <footer className="bg-near-black o-90 pv2 ph3 ph5-m ph6-l pa3-ns white">
              <small className="f6 db tc">© 2020 <b className="ttu">NIZZA PIZZA PASTA & SUBS</b>., All Rights Reserved</small>
                  <div className="tc mt1">
                      <a href="https://www.linkedin.com/in/asimregmi/" target='_blank' rel="noopener noreferrer" title="Asim Regmi" class="f6 dib ph2 link white dim">Website built by Asim Regmi</a>
                  </div>
          </footer>
        </div>
    );
  }
}

export default Footer;