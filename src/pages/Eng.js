import React from 'react';
import Lines from '../components/Lines';
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="landing">
            <Navbar />
            <Lines />
            <div className="home-main">
            <div className="center">
                <div className="boxcenter">
                    <h1 className="text-center titremain">English version coming Soon</h1>
                    <h6 className="text-center">sorry for any inconvenience</h6>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home;