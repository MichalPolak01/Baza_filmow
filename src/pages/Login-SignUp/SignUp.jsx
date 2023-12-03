import React from 'react'
import { Link} from 'react-router-dom';
import useer_icon from './FormIcons/person.png'
import email_icon from './FormIcons/email.png'
import password_icon from './FormIcons/password.png'
import { movies } from '../../data'
import '../../styles/login.css'

export const SignUp = () => {

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
                        <div className='textLogin'>Zarejestruj się</div>
                        <div className='underline'></div>
                    </div>
                    <div className='inputs'>
                        <div className='input'>
                            <img src={useer_icon} alt=""/>
                            <input type='textLogin' placeholder='Login' />
                        </div>
                        <div className='input'>
                            <img src={useer_icon} alt=""/>
                            <input type='text' placeholder='Nazwa' />
                        </div>
                        <div className='input'>
                            <img src={email_icon} alt=""/>
                            <input type='email' placeholder='Email' />
                        </div>
                        <div className='input'>
                            <img src={password_icon} alt=""/>
                            <input type='password' placeholder='Hasło' />
                        </div>
                    </div>
                    <div className='submitContainer'>
                        <div className='submit'>Zarejestruj</div>
                    </div>
                    <div className='OptionSignUp OptionSignUpText'>
                            <div >Masz już konto?</div>
                        <Link to='/signin'>    
                            <div className='otherOption OptionSignUpText'>Zaloguj się</div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}