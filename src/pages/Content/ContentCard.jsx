import React from 'react'
import basicBackground from './BasicBackgrounds/questionMarks.jpg';

export const ContentCard = ({item: {id, title, rate, content, actors, director, 
  genre, image, backgroundImage, date, productionYear}}) => {
  return (
    <>
      <div className="MovieBox">
        <div className="img">
            <img src={backgroundImage !== '' ? backgroundImage : basicBackground} alt="" />
        </div>          
        <div className='icon'>
            <img src={image} alt="" />
        </div>
        <div className='text'>
          <h3>{title}</h3>
          <h4>Średnia ocen: {rate}/10</h4>
          {/* <p>Aktorzy: {actors}</p>
          <p>Reżyser: {director}</p> */}
          <p>Gatunek: {genre}</p>
          <p>Data wydania: {productionYear}</p>
        </div>
      </div>
    </>

  )
}
