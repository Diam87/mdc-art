import React from 'react';
import HomeMain from '../components/HomeMain';
import Lines from '../components/Lines';
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="landing">
            <Navbar />
            <Lines />
            <HomeMain />
        </div>
    )
}

export default Home;