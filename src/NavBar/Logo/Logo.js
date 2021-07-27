import React from 'react';
import logo from './logo.png';

import './Logo.css'

function Logo (props) {
    return (
        <a href="https://www.commbank.com.au/" className="logo" >
            <img src={logo} alt="CommBank Logo"/>
        </a>
    )
}

export default Logo;