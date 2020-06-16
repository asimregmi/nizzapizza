import React, { Component } from 'react';

class Order extends Component {
    render () {
        
        return (
            <div>
                <h1 className="f2-ns w-100 pb3 f6 fw6 ttu tracked mb2 tc">Order Online</h1>
                <h2 class="f5 tc f4-m f3-l fw9 mt0 lh-copy white">
                    For Dine In and Take Out, click below to order.
                </h2>
                <div className='flex justify-center pt4-ns pv4-ns pl4-ns pr4-ns'>
                        <a class="f3 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green" href="#0">Order Online</a>
                </div>
                <h2 class="f5 tc f4-m f3-l fw9 mt0 lh-copy white">
                    For online delivery, please order through our online food delivery partners.
                </h2>
                <div className='flex pt4-ns pv4-ns justify-center'>
                    <div className='pl4-ns pr4-ns'>
                        <a class="f3 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-red" href="#0">DoorDash</a>
                    </div>
                    <div className='pl4-ns pr4-ns'>
                        <a class="f3 grow no-underline br-pill ph3 pv2 mb2 dib white bg-purple" href="#0">Grubhub</a>
                    </div>
                    <div className='pl4-ns pr4-ns'>
                        <a class="f3 grow no-underline br-pill ph3 pv2 mb2 dib white bg-red" href="#0">&nbsp;&nbsp;&nbsp;Slice&nbsp;&nbsp;&nbsp;</a>
                    </div>     
                    {/* <div className='pl4-ns pr4-ns'>
                        <a class="f3 grow no-underline br-pill ph3 pv2 mb2 dib green bg-black" href="#0">Uber Eats</a>
                    </div>       */}
                </div>
            </div>
        );
    }
}

export default Order;
