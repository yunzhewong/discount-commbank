import React from 'react';
import './Search.css';
import search from './search.png'

function Search(props) {
    return (
        <button onClick={()=>{alert("Search Pressed")}} className="search">
            <img src={search} alt="Search button"/>
        </button>
    )
}

export default Search;