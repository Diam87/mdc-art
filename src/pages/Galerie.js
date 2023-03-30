import React from 'react';
import Navbar from "../components/Navbar";
import Lines from '../components/Lines';
import Galery from "../components/Galery";

const Galerie = (props) => {
    let style = props.location.state || " ";
    let titre = "Galerie"

    if (style === "popart") {
        titre = "Pop Art"
    } else if (style === "abstrait") {
        titre = "Abstrait"
    } else if (style === "50shades") {
        titre = "50 Shades"
    };

    return (
        <>
            <Navbar />
            <Lines />
            <h1 className='text-center titre white mt6'> {titre}</h1>
            <Galery style={style} />
        </>
    )
}

export default Galerie;