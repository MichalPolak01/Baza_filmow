import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useer_icon from './FormIcons/person.png';
import email_icon from './FormIcons/email.png';
import password_icon from './FormIcons/password.png';
import { movies } from '../../data';
import '../../styles/login.css';
import axios from 'axios';

export const SignUp = () => {
    const [account, setAccount] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};

        if (account.name.trim() === '') {
            newErrors.name = "Podanie loginu jest wymagane!";
        }

        if (account.email.trim() === '') {
            newErrors.email = "Podanie emaila jest wymagane!";
        } else if (!isValidEmail(account.email)) {
            newErrors.email = "Podany email jest niepoprawny!";
        }

        if (account.password.trim() === '') {
            newErrors.password = "Podanie hasła jest wymagane!";
        }

        return newErrors;
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = validate();
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        axios.post('https://at.usermd.net/api/user/create', {
            name: account.name,
            email: account.email,
            password: account.password
        })
            .then((response) => {
                handleChangeRoute();
            })
            .catch((error) => {
                const errorObject = {};
                errorObject.name = 'Podany login jest zajęty!';
                setErrors(errorObject);
                console.log(error);
            });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAccount(prevAccount => ({
            ...prevAccount,
            [name]: value
        }));
    };

    const handleChangeRoute = () => {
        navigate('/signin');
        window.location.reload();
    };

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
                    <form onSubmit={handleSubmit}>
                        <div className='inputs'>
                            <div className='input'>
                                <img src={useer_icon} alt="" />
                                <input value={account.name} name='name' onChange={handleChange} type='text' id='name' aria-describedby='emailHelp' placeholder='Login' />
                                {errors.name && <div className='alert alert-danger'>{errors.name}</div>}
                            </div>
                            <div className='input'>
                                <img src={email_icon} alt="" />
                                <input value={account.email} name='email' onChange={handleChange} type='email' id='email' aria-describedby='emailHelp' placeholder='Email' />
                                {errors.email && <div className='alert alert-danger'>{errors.email}</div>}
                            </div>
                            <div className='input'>
                                <img src={password_icon} alt="" />
                                <input value={account.password} name='password' onChange={handleChange} type='password' id='password' placeholder='Hasło' />
                                {errors.password && <div className='alert alert-danger'>{errors.password}</div>}
                            </div>
                        </div>
                        <div className='submitContainer'>
                            <button type='submit' className='submit'>Zarejestruj</button>
                        </div>
                    </form>
                    <div className='OptionSignUp OptionSignUpText'>
                        <div >Masz już konto?</div>
                        <Link to='/signin'>
                            <div className='otherOption OptionSignUpText'>Zaloguj się</div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};
