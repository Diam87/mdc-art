import React, { useState } from 'react';
import { projectDatas } from "../data/projectDatas";
import Lines from '../components/Lines';
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";
import ImageGallery from 'react-image-gallery';

const Item = (props) => {

    const [ currentItem ] = useState(projectDatas[props.location.state]);
    const photos = currentItem.photos
    const images = photos.map(extractImgs);
    
    function extractImgs (img) {
        return { "original": img, "thumbnail": img }
    }; 

    class MyGallery extends React.Component {
        render() {
          return <ImageGallery items={images} />;
        }
      }

    if (currentItem.prix === "0") {
        currentItem.prix = <span className='red'>VENDU</span>
    }

    
    return (
        <>
            <Navbar />
            <Lines />
            <div className='container md-5 mt6'>
                <h1 className='titre text-center'>{ currentItem.titre }</h1>
                <hr></hr>
                
                <div className='row'>
                    <div className='col-md-8'>
                         <MyGallery className="carousel" />
                    </div>
                    <div className='col-md-4'>
                        <h6 className='white'>Prix : { currentItem.prix}</h6>
                        <hr></hr>
                        <h6 className='white'>Disponible en prêt pour exposition : { currentItem.dispo}</h6>
                        <hr></hr>
                        <h5 className='white text-center mb-3'><u>À propos de l'oeuvre :</u></h5>
                        <p className="white">{ currentItem.description}</p>
                        <hr></hr>
                        <h6 className='white'>finition : { currentItem.finition}</h6>
                        <h6 className='white'>dimension : { currentItem.dimensions}</h6>
                        <hr></hr>
                        <h6 className='white mb-2'>Pour plus d'information :</h6>
                        
                        <div className='text-center'>
                            <NavLink className="nav-link" to={{pathname:"/contact", state: currentItem.titre }}>
                                <button className='btn btn-primary'>Contactez nous</button>
                            </NavLink>
                        </div>
                    </div>
                    
                        
                    <hr></hr>
                </div>
               
            </div>
        </>
    )
}

export default Item;