import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { movies } from '../../data'
import '../../styles/movie.css'

export const Movie = () => {
    const {id} = useParams()
    const [item, setItem] = useState(null)

    useEffect(() => {
        let item = movies.find((item) => item.id === parseInt(id))
        if (item) {
            setItem(item)
        }
    }, [id])

    return <> {item ? (
        <>
            <section className='singleMovie'>
                <div className="img">
                    <img src={`../${item.background}`} alt="" />
                </div>
                <div className='icon'>
                    <img src={`../${item.img}`} alt="" />
                </div>
                <div className='text'>
                    <h1>{item.name}</h1>
                    <h4>Średnia ocen: {item.rating}/10</h4>
                    <p><span>Opis:</span> <i>{item.description}</i></p>
                    <p><span>Aktorzy:</span> {item.actors}</p>
                    <p><span>Reżyser:</span> {item.director}</p>
                    <p><span>Gatunek:</span> {item.generies}</p>
                    <p><span>Data wydania:</span> {item.date}</p>
                </div>
            </section>
        </>
    ) : null }</>
}
