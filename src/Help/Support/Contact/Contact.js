import React from 'react';

import phone from './../src/phone.png'
import arrow from './../src/arrow.png'

import './Contact.css'
function Contact(props) {
    return (
        <div>
            <a href= "https://www.commbank.com.au/support/contact-us.html?ei=hp-supp_ContactUsH3" className = "contactTitle">
                <img src = {phone} alt="phone" className = "phone"/>
                <h2>Contact us</h2>
                <img src = {arrow} alt="arrow" className = "arrow"/>
            </a>
            <div>
                <div className="text">
                    <p>Call</p>
                    <a href="tel: 132221">13 2221</a>
                    <p>6am to 10pm.</p>
                </div>
                <div className="text">
                    <p>Overseas? Call</p>
                    <a href="tel: 0061299993283">+61 2 9999 3283.</a>
                </div>
                
            </div>
        </div>
    )
}

export default Contact;