import React from 'react'
import '../styles/alert.css'

export const DeleteMovieAlert = ({ onClose, onConfirm }) => {
    return (
        <div className="deleteConfirmation">
            <div className='content'>
                <div className='header'>
                    <h1 className='text'>Czy na pewno chcesz usunąć ten film?</h1>
                    <div className='underline'></div>
                </div>
                <div className='buttons'>
                    <button className='button' onClick={onConfirm}>Tak</button>
                    <button className='button' onClick={onClose}>Anuluj</button>
                </div>
            </div>
        </div>
    );
};