import React from 'react';
import './Links.css'

const data = [
    {text: "Banking", link: "https://www.commbank.com.au/banking.html?ei=mv_banking"},
    {text: "Home loans", link: "https://www.commbank.com.au/home-loans.html?ei=mv_home-loans"},
    {text: "Insurance", link: "https://www.commbank.com.au/insurance.html?ei=mv_insurance"},
    {text: "Investing & super", link: "https://www.commbank.com.au/investing-and-super.html?ei=mv_investing-super"},
    {text: "Business", link: "https://www.commbank.com.au/business.html?ei=mv_business"},
    {text: "Institutional", link: "https://www.commbank.com.au/institutional.html?ei=mv_institutional"},
]

function NavigationLink (props) {
    const showingText = props.text;
    const link = props.link;

    return (
        <div className="navlink">
            <a href={link}>{showingText}</a>
            <div />
        </div>
    )
}

function Links (props) {
    return (
        <div className="linkContainer">
            {data.map((element)=>{
                return <NavigationLink {...element} key={element.text}/>
            })}
        </div>
    )
}

export default Links;