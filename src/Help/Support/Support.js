import React from 'react';

import Contact from './Contact/Contact.js'
import FAQs from './FAQs/FAQs.js'
import Locate from './Locate/Locate.js'

function Support(props) {
    return (
        <React.Fragment>
            <Contact />
            <FAQs />
            <Locate />
        </React.Fragment>
    )
}

export default Support;