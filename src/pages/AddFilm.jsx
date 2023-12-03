import React from 'react'
import { Link} from 'react-router-dom';
import { movies } from '../data'
import '../styles/addfilm.css'

export const AddFilm = () => {

    const latestMovie = movies.sort((a, b) =>
        new Date(b.date.replace(/(\d{2}).(\d{2}).(\d{4})/, '$3-$2-$1')) - new Date(a.date.replace(/(\d{2}).(\d{2}).(\d{4})/, '$3-$2-$1'))
    )[0];

    return (
        <>
            <section className='addFilm'>
                <div className="img">
                    <img src={latestMovie.background} alt="" />
                </div>
                <div className='form'>
                    <div className='header'>
                        <div className='text'>Dodaj film</div>
                        <div className='underline'></div>
                    </div>
                    <div className='inputs'>
                        <div className='input'>
                            <input type='text' placeholder='Nazwa' />
                        </div>
                        <div className='input'>
                            <input type='number' placeholder='Ocena' />
                        </div>
                        <div className='inputTextArena'>
                            <textarea type='text' placeholder='Opis' />
                        </div>
                        <div className='input'>
                            <input type='text' placeholder='Aktorzy' />
                        </div>
                        <div className='input'>
                            <input type='text' placeholder='Reżyser' />
                        </div>
                        <div className='input'>
                            <input type='text' placeholder='Gatunek' />
                        </div>
                        <div className='input'>
                            <input type='text' placeholder='Zdjęcie / ikona' />
                        </div>
                        <div className='input'>
                            <input type='text' placeholder='Zdjęcie / plakat' />
                        </div>
                        <div className='input'>
                            <input type='date' placeholder='Data publikacji' />
                        </div>

                    </div>
                    <div className='submitContainer'>
                        <div className='submit'>Dodaj film</div>
                    </div>
                    {/* <div className='OptionSignUp OptionSignUpText'>
                            <div >Masz już konto?</div>
                        <Link to='/signin'>    
                            <div className='otherOption OptionSignUpText'>Zaloguj się</div>
                        </Link>
                    </div> */}
                </div>
            </section>
        </>
    )
}