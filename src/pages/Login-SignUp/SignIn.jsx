import React from 'react'
import { Link} from 'react-router-dom';
import useer_icon from './FormIcons/person.png'
import password_icon from './FormIcons/password.png'
import { movies } from '../../data'
import '../../styles/login.css'

export const SignIn = () => {

    const latestMovie = movies.sort((a, b) =>
        new Date(b.date.replace(/(\d{2}).(\d{2}).(\d{4})/, '$3-$2-$1')) - new Date(a.date.replace(/(\d{2}).(\d{2}).(\d{4})/, '$3-$2-$1'))
    )[0];

    return (
        <>
            <section className='login'>
                <div className="img">
                    <img src={latestMovie.background} alt="" />
                </div>
                <div className='form'>
                    <div className='header'>
                        <div className='textLogin'>Zaloguj się</div>
                        <div className='underline'></div>
                    </div>
                    <div className='inputs'>
                        <div className='input'>
                            <img src={useer_icon} alt=""/>
                            <input type='textLogin' placeholder='Login' />
                        </div>
                        <div className='input'>
                            <img src={password_icon} alt=""/>
                            <input type='password' placeholder='Hasło' />
                        </div>
                    </div>
                    <div className='forgotPassword'>
                        Zapomniałeś hasła?<br/>
                    </div>
                    <div className='submitContainer'>
                        <div className='submit'>Zaloguj się</div>
                    </div>
                    <div className='OptionSignUp OptionSignUpText'>
                            <div >Jesteś tu nowy?</div>
                        <Link to='/signup'>    
                            <div className='otherOption OptionSignUpText'>Załóż konto</div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}