import React from 'react'
import '../styles/alertConfirm.css'

export const AlertConfirm = ({ onConfirm, text }) => {
    return (
        <div className="alertConfirmation">
            <div className='content'>
                <div className='header'>
                    <h1 className='text'>{text}</h1>
                    <div className='underline'></div>
                </div>
                <div className='buttons'>
                    <button className='button' onClick={onConfirm}>Ok</button>
                </div>
            </div>
        </div>
    );
};