import React from 'react';
import shop from './../src/shop.png'
import arrow from './../src/arrow.png'

import './Locate.css'

function Locate(props) {
    return (
        <div>
            <a href="https://www.commbank.com.au/digital/locate-us/?ei=hp-supp_LocateUsH3"   className="locateTitle">
                <img src={shop} alt="shop" className="shop"/>
                <h2>Locate us</h2>
                <img src={arrow} alt="arrow" className="arrow"/>
            </a>
            <div className="text">
                <p>Find a branch, ATM or specialist near you.</p>
            </div>
        </div>
    )
}

export default Locate;