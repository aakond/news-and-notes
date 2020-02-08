import React from 'react'

import '../styles/index.scss';

const Navbar: React.FC = () => {
        return <nav>
                <div className="nav-wrapper cyan darken-3 nav-wrapper__padding">
                        <a href="#" className="brand-logo nav-wrapper__padding">Главная</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a href="/news">Новости</a></li>
                                <li><a href="/notes">Профиль</a></li>
                        </ul>
                </div>
        </nav>
}

export default Navbar