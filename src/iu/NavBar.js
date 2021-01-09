/* eslint-disable jsx-a11y/anchor-is-valid */
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import {Link} from 'react-router-dom'

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className='App'>
        <nav className='navbar'>
            <div className='navbar-container'>
            <Link to='/' className='navbar-logo'>
                ok
            </Link>
            <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times-circle':'fas fa-bars'}/>
            </div>
            </div>
        </nav>
        </div>
    );

}

export default NavBar