import React from "react";
import '../styles/footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container flexSB">
                <div className="box">
                    <ul >
                        <li>&copy; 2023 Michał Polak</li>
                        <li>Numer indeksu: 35229</li>
                        <li>Żródło danych:
                            <Link to="https://www.themoviedb.org/"> https://www.themoviedb.org/</Link>
                        </li>
                    </ul>
                </div>
                <div className="box">
                    <h3>Śleź nas:</h3>
                    <Link to="https://www.facebook.com"><i className="fab fa-facebook-f"></i></Link>
                    <Link to="https://www.instagram.com"><i className="fab fa-instagram"></i></Link>
                    <Link to="https://www.youtube.com"><i className="fab fa-youtube"></i></Link>
                    <Link to="https://www.twitter.com"><i className="fab fa-x-twitter"></i></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;