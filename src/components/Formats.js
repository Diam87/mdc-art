import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import{ projectDatas } from "../data/projectDatas";


const Galery = (props) => {
    const  [ currentProject ] = useState(projectDatas);
    const projects = currentProject.filter(checkFormat);

    console.log(props.format)
    
    function checkFormat(project) {
        if (project.format === props.format) {
            return project
        }
    };

    return (
        <main>

        <div className="row">

            {projects.map(project => (

                <div className="col-md-3 galerie">
                <div className="card">
                    <img className="card-img-top img-fluid" src={project.urlcover} alt={project.id} />
                    
                    <div className="card-body text-center">
                            <p> TITRE : { project.titre }</p>
                            
                            <p> PRIX : { project.prix } </p>
                            
                            
                        <NavLink className="viewitembtn titre" to={{pathname:"/item/" + project.id, state: project.id }}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Détails</NavLink>
                        
                    </div>
                </div>
            </div>

            ))}

        </div>

        </main>
    );
}

export default Galery;