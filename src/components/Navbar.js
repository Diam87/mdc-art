import React  from 'react';
import { NavLink } from "react-router-dom";
import frflag from "../assets/france.png";
import ukflag from "../assets/uk.png";

function Navbar() {

    return (
    <nav className="navbar navbar-expand-md navbar-dark .bg-transparent fixed-top" id="navbar">
        <div className="container-fluid">
            <NavLink to="/" activeClassName="nav-active" className="hover navbar-brand logo">
                <span className="titre">M<span className="yellow">d</span>C ART</span>
            </ NavLink>
                
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">

                <li className="nav-item dropdown mr-5">
                        <NavLink className="nav-link dropdown-toggle" to="/home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Styles
                        </NavLink>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><hr className="dropdown-divider" /></li>
                          <li><NavLink className="dropdown-item white" to={{pathname:"/abstrait", state: "abstrait" }}>Abstrait</NavLink></li>
                          <li><hr className="dropdown-divider" /></li>
                          <li><NavLink className="dropdown-item white" to={{pathname:"/popart", state: "popart" }}>Pop Art</NavLink></li>
                          <li><hr className="dropdown-divider" /></li>
                          <li><NavLink className="dropdown-item white" to={{pathname:"/50shades", state: "50shades" }}>50 Shades</NavLink></li>
                          <li><hr className="dropdown-divider" /></li>
                        </ul>
                    </li>

                    <li className="nav-item mr-5">
                    <NavLink className="nav-link" to={{pathname:"/galerie", state: "Galerie" }}>Galerie</NavLink>
                    </li>

                    <li className="nav-item dropdown mr-5">
                        <NavLink className="nav-link dropdown-toggle" to="/home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Formats
                        </NavLink>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><hr className="dropdown-divider" /></li>
                          <li><NavLink className="dropdown-item white" to={{pathname:"/grands", state: "grand" }}>Grands</NavLink></li>
                          <li><hr className="dropdown-divider" /></li>
                          <li><NavLink className="dropdown-item white" to={{pathname:"/petits", state: "petit" }}>Petits</NavLink></li>
                          <li><hr className="dropdown-divider" /></li>
                        </ul>
                    </li>


                    <li className="nav-item mr-5">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item mr-1">
                        <div className="languages">
                            <NavLink to="/"><img className="flag" src={frflag} alt="frflag" /></NavLink>
                            <NavLink to="/eng"><img className="flag" src={ukflag} alt="ukflag"/></NavLink>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    )
}

export default Navbar
