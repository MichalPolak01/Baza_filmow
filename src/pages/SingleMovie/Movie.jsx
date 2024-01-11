import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { movies } from '../../data'
import '../../styles/movie.css'
// import basicBackground from '../BasicBackgrounds/questionMarks.jpg';
import basicBackground from "../Content/BasicBackgrounds/questionMarks.jpg";

export const Movie = () => {
    const {id} = useParams()
    const [item, setItem] = useState(null)

    // useEffect(() => {
    //     let item = movies.find((item) => item.id === parseInt(id))
    //     if (item) {
    //         setItem(item)
    //     }
    // }, [id])

    const fetchData = async () => {
        try {
            const response = await fetch(`https://at.usermd.net/api/movies/${id}`, {
            method: "GET",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          });
    
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
    
          const data = await response.json();
          setItem(data);
        } catch (error) {
          console.error("Error fetching data:", error.message);
        }
      };

    useEffect(() => {
        fetchData();
    }, [id])

    return <> {item ? (
        <>
            <section className='singleMovie'>
                <div className="img">
                    <img src={item.backgroundImage !== '' ? item.backgroundImage : basicBackground} alt="" />
                </div>
                <div className='icon'>
                    <img src={item.image} alt="" />
                </div>
                <div className='text'>
                    <h1>{item.title}</h1>
                    <h4>Średnia ocen: {item.rate}/10</h4>
                    <p><span>Opis:</span> <i>{item.content}</i></p>
                    {/* <p><span>Aktorzy:</span> {item.actors}</p> */}
                    {/* <p><span>Reżyser:</span> {item.director}</p> */}
                    <p><span>Gatunek:</span> {item.genre}</p>
                    <p><span>Data wydania:</span> {item.productionYear}</p>
                </div>
            </section>
        </>
    ) : null }</>
}
