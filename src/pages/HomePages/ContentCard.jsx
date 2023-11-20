import React from 'react'

export const ContentCard = ({item: {id, name, rating, description, actors, director, 
  generies, img, background, date, publicationDate}}) => {
  return (
    <>
      <div className="MovieBox">
        <div className="img">
            <img src={background} alt="" />
        </div>          
        <div className='icon'>
            <img src={img} alt="" />
          </div>
        <div className='text'>
          <h3>{name}</h3>
          <h4>Średnia ocen: {rating}/10</h4>
          <p>Aktorzy: {actors}</p>
          <p>Reżyser: {director}</p>
          <p>Gatunek: {generies}</p>
          <p>Data wydania: {date}</p>
        </div>
      </div>
    </>

  )
}
