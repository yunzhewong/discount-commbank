import React from 'react';
import './NavBar.css'
import Links from './Links/Links.js'
import Logo from './Logo/Logo.js'
import Search from './Search/Search.js'
import Login from './Login/Login.js'

function NavBar(props) {
    const width = props.width;

    const ordering = [<Logo />, <Links width={width}/>]
    const wide = width > 985;
    let newList = []
    if (wide) {
        newList = ordering;
    } else {
        newList = ordering.reverse();
    }

    return (
        <div className="container">
            <div className={`mainlinks`}>
                {newList}
            </div>
            <Search />
            <Login />
        </div>
    )
}

export default NavBar;