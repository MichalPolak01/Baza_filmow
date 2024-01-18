import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { movies } from '../data'
import '../styles/addMovie.css'
import '../styles/homes.css'
import { Slider } from "../components/Slider"
import axios from 'axios';

export const AddMovie = () => {
    const navigate = useNavigate();

    const latestMovie = movies.sort((a, b) =>
        new Date(b.date.replace(/(\d{2}).(\d{2}).(\d{4})/, '$3-$2-$1')) - new Date(a.date.replace(/(\d{2}).(\d{2}).(\d{4})/, '$3-$2-$1'))
    )[0];

    const [movie, setMovie] = useState({
        title: '',
        image: '',
        backgroundImage: '',
        content: '',
        rate: '',
        genre: '',
        productionYear: ''
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (movie.title.trim() === '') {
            newErrors.title = "Podanie tytułu jest wymagane!";
        }

        if (movie.image.trim() === '') {
            newErrors.image = "Podanie zdjęcia jest wymagane!";
        } else if (!/\.(jpg|jpeg)$/.test(movie.image.trim().toLowerCase())) {
            newErrors.image = "Niepoprawny adres URL zdjęcia!";
        }

        if (movie.backgroundImage.trim() === '') {
            newErrors.backgroundImage = "Podanie tła jest wymagane!";
        } else if (!/\.(jpg|jpeg)$/.test(movie.image.trim().toLowerCase())) {
            newErrors.image = "Niepoprawny adres URL zdjęcia!";
        }

        if (movie.content.trim() === '') {
            newErrors.content = "Podanie opisu jest wymagane!";
        }

        if (movie.rate.trim() === '') {
            newErrors.rate = "Podanie oceny jest wymagane!";
          } else {
            const parsedRate = parseFloat(movie.rate);
            if (isNaN(parsedRate) || parsedRate < 0) {
              newErrors.rate = "Ocena musi być liczbą większą lub równą 0.";
            } else if (parsedRate > 10) {
              setMovie((prevMovie) => ({
                ...prevMovie,
                rate: '10',
              }));
            }
          }

        if (movie.genre.trim() === '') {
            newErrors.genre = "Podanie gatunku jest wymagane!";
        }
        if (movie.productionYear.trim() === '') {
            newErrors.productionYear = "Podanie roku produkcji jest wymagane!";
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

        axios.post('https://at.usermd.net/api/movies', {
            title: movie.title,
            image: movie.image,
            backgroundImage: movie.backgroundImage,
            content: movie.content,
            rate: movie.rate,
            genre: movie.genre,
            productionYear: movie.productionYear
        })
            .then((response) => {
                handleChangeRoute();
            })
            .catch((error) => {
                const errorObject = {};
                errorObject.title = 'Podany film już występuje w naszej bazie!';
                setErrors(errorObject);
                console.log(error);
            });
    };

    const handleChange = (event) => {
        const { id, value } = event.target;
        setMovie(prevMovie => ({
            ...prevMovie,
            [id]: value
        }));
    };

    const handleChangeRoute = () => {
        navigate('/');
        window.location.reload();
    };

    return (
        <>
            <section className="home">
                <div className="homeContainer">
                    <Slider item={latestMovie} title = 'Witaj, w Świecie filmowych nowości!' subTitle = 'Twoje Miejsce, Twoje Filmy - Dziel Się Swoimi Ulubionymi Produkcjami Z Całą Społecznością Kinomanów!'/>
                </div>
            </section>
            <div className='container'>
                <section className='addFilm'>
                    <div className='form'>
                        <div className='header'>
                            <div className='text'>Dodaj swój film, wypełniając formularz</div>
                            <div className='underline'></div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='inputs'>
                                <div className='input'>
                                    <input value={movie.title} onChange={handleChange} type='text' id='title'  aria-describedby='emailHelp' placeholder='Tytuł' />
                                    {errors.title && <div className='alert alert-danger'>{errors.title}</div>}
                                </div>
                                <div className='input'>
                                    <input value={movie.rate} onChange={handleChange} type='number' min="0" max="10" id='rate'  aria-describedby='emailHelp' placeholder='Ocena' />
                                    {errors.rate && <div className='alert alert-danger'>{errors.rate}</div>}
                                </div>
                                <div className='inputTextArena'>
                                    <textarea value={movie.content} onChange={handleChange} type='text' id='content' aria-describedby='emailHelp' placeholder='Opis' />
                                    {errors.content && <div className='alert alert-danger'>{errors.content}</div>}
                                </div>
                                <div className='input'>
                                    <input value={movie.genre} onChange={handleChange} type='text' id='genre' aria-describedby='emailHelp' placeholder='Gatunek' />
                                    {errors.genre && <div className='alert alert-danger'>{errors.genre}</div>}
                                </div>
                                <div className='input'>
                                    <input value={movie.image} onChange={handleChange} type='text' id='image' aria-describedby='emailHelp' placeholder='Zdjęcie / ikona' />
                                    {errors.image && <div className='alert alert-danger'>{errors.image}</div>}
                                </div>
                                <div className='input'>
                                    <input value={movie.backgroundImage} onChange={handleChange} type='text' id='backgroundImage' aria-describedby='emailHelp' placeholder='Zdjęcie / tło' />
                                    {errors.backgroundImage && <div className='alert alert-danger'>{errors.backgroundImage}</div>}
                                </div>
                                <div className='input'>
                                    <input value={movie.productionYear} onChange={handleChange} type='number' min="1900" max="2024" id='productionYear' aria-describedby='emailHelp' placeholder='Data publikacji' />
                                    {errors.productionYear && <div className='alert alert-danger'>{errors.productionYear}</div>}
                                </div>

                            </div>
                            <div className='submitContainer'>
                                <button type='submit' className='submit'>Dodaj film</button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </>
    )
}