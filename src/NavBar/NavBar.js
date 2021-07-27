import React from 'react';
import './NavBar.css'
import Links from './Links/Links.js'
import Logo from './Logo/Logo.js'
import Search from './Search/Search.js'
import Login from './Login/Login.js'

function NavBar(props) {
    return (
        <div className="container">
            <div className="mainlinks">
                <Logo />
                <Links />
            </div>
            <Search />
            <Login />
        </div>
    )
}

export default NavBar;