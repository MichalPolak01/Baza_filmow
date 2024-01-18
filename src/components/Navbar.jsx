import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import React, { useState } from 'react';
import '../styles/navbar.css'
import { SearchBar } from './SearchBar';
import { isExpired } from "react-jwt";
import logo from './images/movie-logo.png'


export const Navbar = () => {
    const [Mobile, setMobile] = useState(false);

    const token = localStorage.getItem('token');
    const isNotLogged = token ? isExpired(token) : true;
    
    return (
        <header>
            <div className='container flexSB'>
                <nav className='flexSB'>
                    <div className='logo'>
                        <Link to='/'>
                            <img src={logo} alt='logo' />
                        </Link>
                    </div>
                    <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick = {() => setMobile(false)}>
                        <CustomLink to={'/'}>Home</CustomLink>
                        <CustomLink to={'/add'}>Dodaj film</CustomLink>
                        {isNotLogged &&
                            <CustomLink to={'/signin'} className='toggleLogin signin'>
                                <i className="fa-solid fa-user-tie"></i>
                                    Zaloguj
                            </CustomLink>
                        }
                        {!isNotLogged &&
                            <li>
                                <a href='/' className='toggleLogin signin' onClick={() => localStorage.removeItem('token')}>
                                    <i className="fa-solid fa-user-slash"></i>
                                    Wyloguj
                                </a>
                            </li>
                        }
                    </ul>
                    <button className='toggle' onClick = {() => setMobile(!Mobile)}>
                        {Mobile ?  <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                    </button>
                </nav>
                <div className='account flexSB'>
                    <SearchBar />
                    <ul className='logginAccount'>
                        {isNotLogged &&
                            <CustomLink to={'/signin'} className='signin'>
                                <i className="fa-solid fa-user-tie"></i>
                                    Zaloguj
                            </CustomLink>
                        }
                        {!isNotLogged &&
                            <li>
                                <a href='/' className='signin' onClick={() => localStorage.removeItem('token')}>
                                    <i className="fa-solid fa-user-slash"></i>
                                    Wyloguj
                                </a>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </header>
    );
}

function CustomLink({to, children, ...props}) {
    const resolvedPath =  useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? 'active': ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}