import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/alert.css'

export const AlertNotLogged = ({ onClose }) => {
    return (
        <div className="deleteConfirmation">
            <div className='content'>
                <div className='header'>
                    <h1 className='text'>Aby usunąć film musisz być zalogowany!</h1>
                    <div className='underline'></div>
                </div>
                <div className='buttons'>
                    <Link to='/signin' className='button' >Zaloguj</Link>
                    <button className='button' onClick={onClose}>Anuluj</button>
                </div>
            </div>
        </div>
    );
};