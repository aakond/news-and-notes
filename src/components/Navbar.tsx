import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/styles.scss';

const Navbar: React.FC = () => {
    document.addEventListener('DOMContentLoaded', function() {
        const elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);
      });
    
    return <nav>
        <div className="nav-wrapper teal lighten-1 padding-1">
            <a href="#" className="sidenav-trigger" data-target="mobile-nav">
                <i className="material-icons">menu</i> </a>
            <NavLink to="/" className="brand-logo">Главная</NavLink>
            <ul className="right hide-on-med-and-down">
                <li><NavLink activeClassName="navlink-active" to="/news">Новости</NavLink></li>
                <li><NavLink activeClassName="navlink-active" to="/notes">Профиль</NavLink></li>
            </ul>
        </div>

        <ul className="sidenav sidenav-close" id="mobile-nav">
            <li><NavLink activeClassName="navlink-active" to="/news">Новости</NavLink></li>
            <li><NavLink activeClassName="navlink-active" to="/notes">Профиль</NavLink></li>
        </ul>
    </nav>

        
}

export default Navbar