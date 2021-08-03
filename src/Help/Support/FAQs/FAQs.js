import React from 'react';
import './FAQs.css'

import lifering from './../src/lifering.jpg'
import arrow from './../src/arrow.png'

const links = [
    {body: "Coronavirus support for home loan customers", link: "https://www.commbank.com.au/latest/support-for-home-loan-customers.html?ei=hp-supp_supportforhomeloancustomer"},
    {body: "Coronavirus support", link: "https://www.commbank.com.au/latest/coronavirus.html?ei=hp-supp_coronavirussupport"},
    {body: "Cancel a pending transaction", link: "https://www.commbank.com.au/support.banking.stop-or-cancel-pending-transaction.html?ei=hp-supp_CancelPendingTransactions"},
    {body: "Dispute a transaction", link: "https://www.commbank.com.au/support/disputing-a-transaction.html?ei=hp-supp_DisputeTransactions"},
    {body: "What's a phishing scam?", link: "https://www.commbank.com.au/support.security.phishing-and-smishing-scams-explained.html?ei=hp-supp_PhishingScams"},
    {body: "How do I activate a card?", link: "https://www.commbank.com.au/support.cards.activate-card.html?ei=hp-supp_ActivateCard"},
    {body: "Online statements", link: "https://www.commbank.com.au/support.digital-banking.online-statements.html?ei=hp-supp_OnlineStatements"},
    {body: "Complaints and compliments", link: "https://www.commbank.com.au/support/compliments-and-complaints.html?ei=hp-supp_ComplaintsCompliments"}
]

function Button (props) {
    const body = props.body;
    const link = props.link;
    return (
        <a href={link} className="faqLink">
            <h2>{body}</h2>
            <img src={arrow} alt="arrow" />
        </a>
    )
}


function FAQs(props) {
    return (
        <div className="faqs">
            <a href= "https://www.commbank.com.au/support.html?ei=supp_supp-and-faqs" className="faqsTitle">
                <img src={lifering} alt="lifering" />
                <h2>Support & FAQs</h2>
                <img src={arrow} alt="arrow" />
            </a>
            <div className="faqslinks">
                {links.map((element) => {
                    return <Button key={element.body} {...element} />
                })}
            </div>
        </div>
    )
}

export default FAQs;