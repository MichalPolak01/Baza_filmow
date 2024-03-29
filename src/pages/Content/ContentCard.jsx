import React from 'react'
import basicBackground from './BasicBackgrounds/questionMarks.jpg';

export const ContentCard = ({item: {id, title, rate, content, actors, director, 
  genre, image, backgroundImage, date, productionYear}}) => {
  return (
    <>
      <div className="MovieBox">
        <div className="img">
            <img src={backgroundImage}
              onError={({currentTarget}) => {
                currentTarget.src = basicBackground
                currentTarget.onerror = null
              }} alt="" />
        </div>          
        <div className='icon'>
            <img src={image} alt=""     
              onError={({currentTarget}) => {
                currentTarget.src = basicBackground
                currentTarget.onerror = null
              }} />
        </div>
        <div className='text'>
          <h3>{title}</h3>
          <div className='content'>
            <h4><span>Średnia ocen:</span> {rate}/10</h4>
            <h4><span>Gatunek:</span> {genre}</h4>
            <h4><span>Data wydania:</span> {productionYear}</h4>
          </div>
        </div>
      </div>
    </>
  )
}
