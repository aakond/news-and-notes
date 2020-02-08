import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/styles.scss';

const Navbar: React.FC = () => {
        return <nav>
                <div className="nav-wrapper cyan darken-3 padding-1">
                        <NavLink to="/" className="brand-logo">Главная</NavLink>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><NavLink activeClassName="navlink__active" to="/news">Новости</NavLink></li>
                                <li><NavLink activeClassName="navlink__active" to="/notes">Профиль</NavLink></li>
                        </ul>
                </div>
        </nav>
}

export default Navbar