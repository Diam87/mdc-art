import React from 'react';
import Navbar from "../components/Navbar";
import Lines from '../components/Lines';
import Formats from "../components/Formats";

const Galerie = (props) => {
    let format = props.location.state || " ";
    let titre = "";

    if (format === "petit") {
        titre = "Petit"
    } else if (format === "grand") {
        titre = "Grand"
    }

    
    return (
        <>
            <Navbar />
            <Lines />
            <h1 className='text-center titre white mt-5'> 〜{titre} Formats〜</h1>
            <Formats format={format} />
        </>
    )
}

export default Galerie;