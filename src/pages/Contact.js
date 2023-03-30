import React from 'react';
import Lines from '../components/Lines';
import Mailer from '../components/Mailer';
import Navbar from "../components/Navbar";

   

const Contact = (props) => {

    const titre = props.location.state || "Email Generique";


    return (
        <div>
            <Navbar />
            <Lines />
            <Mailer titre={titre} />    
        </div>
    )
}

export default Contact;