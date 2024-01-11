import React from 'react'
import basicBackground from '../pages/Content/BasicBackgrounds/questionMarks.jpg';
import '../styles/notFound.css'
import { Link } from 'react-router-dom';

export const NotFound = () =>  {

    return (
    //   <div>NotFound</div>
      <section className='notFound'>
        <div className="img">
          <img src={basicBackground} alt="" />
        </div>
        <div className='content'>
          <div className='header'>
            <h1 className='text'>Znalazłeś się na podstronie, która nie istnieje.</h1>
            <div className='underline'></div>
          </div>

          <Link to='/' className='button'>
            Powrót do strony domowej
          </Link>
        </div>
      </section>
    )
}
