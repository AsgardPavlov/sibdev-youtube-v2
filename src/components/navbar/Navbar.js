import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../img/sibdev-logo.png'
import './Navbar.css'

const Navbar = () => {

    const logOut = () => {
        sessionStorage.clear();
        window.location.reload();
    }

    return (
        <nav>
            <div className="wrapper">
                <img src={Logo} alt="sibdev-logo"></img>
                <ul>
                    <NavLink className="nav-li" activeClassName='active-nav' exact to="/">Поиск</NavLink>
                    <NavLink className="nav-li" activeClassName='active-nav' to="/liked">Избранное</NavLink>
                </ul>
            </div>
            <div className="wrapper-right">
                <ul style={{justifyContent: 'flex-end'}}>
                    <div className="nav-li exit">
                        <a onClick={logOut}>Выйти</a>
                    </div>
                </ul>
            </div>
        </nav>
    );
};
export default Navbar;