import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userIcon from './FormIcons/person.png';
import passwordIcon from './FormIcons/password.png';
import { movies } from '../../data';
import '../../styles/login.css';
import axios from 'axios';

export const SignIn = () => {
    const [account, setAccount] = useState({
        login: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};

        if (account.login.trim() === '') {
            newErrors.login = "Podanie loginu jest wymagane!";
        }
        if (account.password.trim() === '') {
            newErrors.password = "Podanie hasła jest wymagane!";
        }

        return newErrors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = validate();
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        axios.post('https://at.usermd.net/api/user/auth', {
            login: account.login,
            password: account.password
        })
        .then((response) => {
            localStorage.setItem('token', response.data.token);
            handleChangeRoute();
        })
        .catch((error) => {
            const errorObject = {};
            errorObject.password = 'Podany login lub hasło są niepoprawne!';
            console.log(error);
            setErrors(errorObject);
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
        navigate('/');
        window.location.reload();
    };

    const latestMovie = movies.sort((a, b) =>
        new Date(b.date.replace(/(\d{2}).(\d{2}).(\d{4})/, '$3-$2-$1')) -
        new Date(a.date.replace(/(\d{2}).(\d{2}).(\d{4})/, '$3-$2-$1'))
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
                    <form onSubmit={handleSubmit}>
                        <div className='inputs'>
                            <div className='input'>
                                <img src={userIcon} alt="" />
                                <input
                                    type='text'
                                    placeholder='Login'
                                    name='login'
                                    value={account.login}
                                    onChange={handleChange}
                                />
                                {errors.login && <div className='alert alert-danger'>{errors.login}</div>}
                            </div>
                            <div className='input'>
                                <img src={passwordIcon} alt="" />
                                <input
                                    type='password'
                                    placeholder='Hasło'
                                    name='password'
                                    value={account.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <div className='alert alert-danger'>{errors.password}</div>}
                            </div>
                        </div>
                        <div className='forgotPassword'>
                            Zapomniałeś hasła?<br />
                        </div>
                        <div className='submitContainer'>
                            <button type='submit' className='submit'>Zaloguj się</button>
                        </div>
                    </form>
                    <div className='OptionSignUp OptionSignUpText'>
                        <div>Jesteś tu nowy?</div>
                        <Link to='/signup'>
                            <div className='otherOption OptionSignUpText'>Załóż konto</div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};
