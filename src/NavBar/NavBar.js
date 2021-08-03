import React from 'react';
import './NavBar.css'
import Links from './Links/Links.js'
import Logo from './Logo/Logo.js'
import Search from './Search/Search.js'
import Login from './Login/Login.js'

function NavBar(props) {
    const width = props.width;

    return (
        <div className="container">
            <div className={"mainlinks"}>
                <Logo className="logo"/>
                <Links className="links" width={width}/>
            </div>
            <Search />
            <Login />
        </div>
    )
}

export default NavBar;