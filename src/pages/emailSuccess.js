import React from 'react';
import Succes from '../components/Succes';
import Lines from '../components/Lines';
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="landing">
            <Navbar />
            <Lines />
            <Succes />
        </div>
    )
}

export default Home;