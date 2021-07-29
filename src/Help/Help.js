import React from 'react';

import Support from './Support/Support.js'
import Know from './Know/Know.js'

import './Help.css'

function Help(props) {
    return (
        <div className="helpContainer">
            <Support />
            <Know />
        </div>

    )
}

export default Help;