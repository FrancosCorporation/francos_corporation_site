import React, { useState } from 'react';
import { Nav, NavbarContainer, NavLogo } from './NavbarElements'
import logo from '../images/whatsapp_PNG21.png';
import rocket from './rocket.json';
import Lottie from 'react-lottie';
//import fundo from '../images/pexels-photo-433142.jpeg'




export const Navbar = (props) => {


    const [animationState] = useState({ isStopped: false, isPaused: false });

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: rocket,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' ><img src={logo} alt="Logo" width='8%' /></NavLogo>
                </NavbarContainer>
            </Nav>
            {//<img src={fundo} alt="fundo"  height='20%' width='100%'/>
            }           <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Lottie options={defaultOptions}
                    height={400}
                    width={400}
                    isStopped={animationState.isStopped}
                    isPaused={animationState.isPaused} />
            </div>
        </>
    )
}

export default Navbar;