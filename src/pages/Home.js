import React, { useState, useEffect } from 'react';
import Navbar from '../component/Navbar/index'
import logo from '../assets/jsons/work.json';
import imageDeFundo from '../assets/images/pexels-pixabay-268533.jpg'
import Lottie from 'react-lottie';
import { LogoStyled, Display, TelaFundo } from './HomeStyled'
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
        }, 3000);
    }, []);
    return (
        <div>
            {loading ? <Display ><LogoStyled ><Lottie options={defaultOptions} width={300} loading={loading} /></LogoStyled></Display> :
                <div>
                    <Navbar />
                    <TelaFundo></TelaFundo>
                    <img src={imageDeFundo} alt="imageDeFundo" />
                </div>}

        </div>

    )
}
export default Home;