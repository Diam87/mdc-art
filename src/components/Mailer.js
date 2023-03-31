import React from 'react';
import emailjs from '@emailjs/browser';
import { useHistory } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";


const Mailer = (props) => {

    const onChange= () =>{
        document.getElementById('submitBtn').disabled = false
    }; 

    let aPropos = props.titre
    let history = useHistory();

    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm(
            process.env.REACT_APP_MAILER_SERVICE_KEY,
            process.env.REACT_APP_MAILER_TEMPLATE_KEY,
            e.target,
            process.env.REACT_APP_MAILER_USER_ID
        )
        .then((e) => {
            console.log("Success", e)
        }, function(error) {
            console.log('FAILED...', error);
        });
        history.push("/succees");
    };




    return (
        <div className='container'>
            <div className="row mt-2">
                <div className="col-12 text-center">

                    <h1 className="display-4 titre white mt6">Contact</h1>
                    <hr />
                </div>
                <div className="col-12 text-center white">
                    <p>Pour toute question,commentaire, offre ou demande de prêt, n'hésitez pas à nous contacter</p>
                </div>
            
        
                <div className="col-12 text-center">
                    <form className="form-control" onSubmit={sendEmail}>
                        <div className="form-group">
                            <input className="form-control black" type="email" name="user_email" placeholder="Votre Email" required />
                        </div>
                        <div className="form-group">
                            <input className="form-control black" name="name" placeholder="Votre nom" required />
                        </div>
                        <div className="form-group">
                            <input className="form-control black" name="titre" placeholder="Titre" required />
                            <input name="a_propos" type="hidden" value={ aPropos }/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control black" name="message" placeholder="Votre Message" rows="4"></textarea>
                        </div>
                        <div className="form-group text-center">
                            <ReCAPTCHA
                                sitekey={process.env.REACT_APP_RECAPTCHA_ID}
                                onChange={onChange}
                                className="g-recaptcha"
                            />
                        </div>
                        
                        <input id="submitBtn" type="submit" className="btn btn-primary" disabled />
                    </form>

                    <div className="text-center white mt-2">
                        mdecoster87@gmail.com
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Mailer;