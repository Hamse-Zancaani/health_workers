import React from 'react';
import './Navbar.scss';
import logo1 from './../../assets/logo1.png';
import {Link} from 'react-router-dom';

const Navbar = () => {

    const navbarItems = [
        {
            name: 'Forside',
            path: '/',
        },
        {
            name: 'Om Os',
            path: '/about',
        },
         {
            name: 'Service',
            path: '/services',
        },
        {
            name: 'Rekruttering',
            path: '/recruitment',
        },
          {
            name: 'For Vikarer',
            path: '/temporaryworkers',
        },


        {
            name: 'Nyheder',
            path: '/news',
        },
        {
            name: 'Kontakt',
            path: '/contact',
        }, {
            name: 'Produktionssektor',
            path: '/productionsector',
        }
    ];

    return (
        <div className='main-nav'>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        {/* Logo */}
                        <Link className="navbar-brand" to="/">
                            <img src={logo1} alt="logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Navbar Link */}
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                               { 
                                navbarItems.map (navSingle =>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={navSingle.path}>{navSingle.name}</Link>
                                    </li>
                                    ) 
                                }
                            </ul>
                            
                            {/* Navbar Button */}
                            {/* <div className="theme-btn">
                                <Link to="/contact">Kontakt  Os</Link>
                            </div> */}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;