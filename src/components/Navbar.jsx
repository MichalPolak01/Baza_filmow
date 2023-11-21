import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import React, { useState } from 'react';
import '../styles/navbar.css'
import { SearchBar } from './SearchBar';

const Navbar = () => {
    const [Mobile, setMobile] = useState(false)
    return (
        <header>
            <div className='container flexSB'>
                <nav className='flexSB'>
                    <div className='logo'>
                        <Link to='/'>
                            <img src='./images/movie-logo.png' alt='logo' />
                        </Link>
                    </div>
                    <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick = {() => setMobile(false)}>
                        <CustomLink to={'/'}>Home</CustomLink>
                        <CustomLink to={'/Movies'}>Filmy</CustomLink>
                        <CustomLink to={'/AddFilm'}>Dodaj film</CustomLink>
                    </ul>
                    <button className='toggle' onClick = {() => setMobile(!Mobile)}>
                        {Mobile ?  <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                    </button>
                </nav>
                <div className='account flexSB'>
                    <SearchBar />
                    <Link to='/Login'>
                        <i className='fa fa-user'></i>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Navbar;

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