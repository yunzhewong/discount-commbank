import React from 'react';

import Contact from './Contact/Contact.js'
import FAQs from './FAQs/FAQs.js'
import Locate from './Locate/Locate.js'

import './Support.css'

function Support(props) {
    return (
        <div>
            <h1 className="title">We can help</h1>
            <div className="supportContainer">
                <FAQs />
                <div className="nonFaqs">
                    <Contact />
                    <Locate />
                </div>
            </div>
        </div>
    )
}

export default Support;