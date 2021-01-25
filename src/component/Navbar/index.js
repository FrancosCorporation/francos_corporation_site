import React from 'react';
import logo from '../../assets/jsons/work.json';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Logo, Envolv
} from './navbarElements';
import Lottie from 'react-lottie';
function NavBar() {



    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: logo,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <Nav>
            <Logo>
                <Envolv to='/'><Lottie options={defaultOptions} width={110} /></Envolv>

            </Logo>
            <Bars />
            <NavMenu>
                <NavLink to='/sobre' activeStyle>
                    Sobre
                        </NavLink>
                <NavLink to='/servicos' activeStyle>
                    Serviços
          </NavLink>
                <NavLink to='/contato' activeStyle>
                    Contato
          </NavLink>
                <NavLink to='/entrar' activeStyle>
                    Entrar
          </NavLink>
                {/* Second Nav */}
                {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/cadastrar'>Cadastrar-Se</NavBtnLink>
            </NavBtn>
        </Nav>

    )
}

export default NavBar;
