import React from 'react'
import { movies } from '../data'
import '../styles/addfilm.css'
import '../styles/homes.css'
import { Slider } from "../components/Slider"

export const AddFilm = () => {

    const latestMovie = movies.sort((a, b) =>
        new Date(b.date.replace(/(\d{2}).(\d{2}).(\d{4})/, '$3-$2-$1')) - new Date(a.date.replace(/(\d{2}).(\d{2}).(\d{4})/, '$3-$2-$1'))
    )[0];

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

                    </div>
                </section>
            </div>
            
        </>
    )
}



// import React from 'react'
// import { movies } from '../data'
// import '../styles/addfilm.css'

// export const AddFilm = () => {

//     const latestMovie = movies.sort((a, b) =>
//         new Date(b.date.replace(/(\d{2}).(\d{2}).(\d{4})/, '$3-$2-$1')) - new Date(a.date.replace(/(\d{2}).(\d{2}).(\d{4})/, '$3-$2-$1'))
//     )[0];

//     return (
//         <>
//             <section className='addFilm'>
//                 <div className="img">
//                     <img src={latestMovie.background} alt="" />
//                 </div>
//                 <div className='form'>
//                     <div className='header'>
//                         <div className='text'>Dodaj film</div>
//                         <div className='underline'></div>
//                     </div>
//                     <div className='inputs'>
//                         <div className='input'>
//                             <input type='text' placeholder='Nazwa' />
//                         </div>
//                         <div className='input'>
//                             <input type='number' placeholder='Ocena' />
//                         </div>
//                         <div className='inputTextArena'>
//                             <textarea type='text' placeholder='Opis' />
//                         </div>
//                         <div className='input'>
//                             <input type='text' placeholder='Aktorzy' />
//                         </div>
//                         <div className='input'>
//                             <input type='text' placeholder='Reżyser' />
//                         </div>
//                         <div className='input'>
//                             <input type='text' placeholder='Gatunek' />
//                         </div>
//                         <div className='input'>
//                             <input type='text' placeholder='Zdjęcie / ikona' />
//                         </div>
//                         <div className='input'>
//                             <input type='text' placeholder='Zdjęcie / plakat' />
//                         </div>
//                         <div className='input'>
//                             <input type='date' placeholder='Data publikacji' />
//                         </div>

//                     </div>
//                     <div className='submitContainer'>
//                         <div className='submit'>Dodaj film</div>
//                     </div>
//                     {/* <div className='OptionSignUp OptionSignUpText'>
//                             <div >Masz już konto?</div>
//                         <Link to='/signin'>    
//                             <div className='otherOption OptionSignUpText'>Zaloguj się</div>
//                         </Link>
//                     </div> */}
//                 </div>
//             </section>
//         </>
//     )
// }