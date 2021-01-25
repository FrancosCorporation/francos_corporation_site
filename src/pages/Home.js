import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar/index'
import logo from '../assets/jsons/rocket.json';
import Lottie from 'react-lottie';
import { LogoStyled, Display } from './HomeStyled'
import './Home.css'
function Home() {
    const [loading, setLoading] = useState(false);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: logo,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 6000);
    }, []);
    return (
        <div>
            {loading ? <Display ><LogoStyled ><Lottie options={defaultOptions} width={300} loading={loading} /></LogoStyled></Display> : <Navbar />}

        </div>

    )
}
export default Home;