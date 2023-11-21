import React, { useEffect, useState } from "react";
import { Content } from "../Content/Content";
import { movies } from "../../data";
import { Home } from "./Home";


export const HomePage = () => {
    const [items, setItem] = useState(movies)
    const [title, setTitle] = useState('')
    const [sortingFilms, setSortingFilms] = useState('')

    const sortByRating = () => {
        const sortedItems = [...items].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
        setItem(sortedItems);
        setTitle('Najwyżej oceniane');
        setSortingFilms('Zobacz najnowsze')
    };
      
    const sortByDate = () => {
        const sortedItems = [...items].sort((a, b) => new Date(b.date.replace(/(\d{2}).(\d{2}).(\d{4})/, '$3-$2-$1')) - new Date(a.date.replace(/(\d{2}).(\d{2}).(\d{4})/, '$3-$2-$1')));
        setItem(sortedItems);
        setTitle('Najowsze publikacje');
        setSortingFilms('Zobacz najwyżej oceniane')
    };

    useEffect(() => {
        sortByRating();
    }, [] )
    
    return (
        <>
            <Home />
            <div className='container'>
                <div className='sort flexSB'>
                    <h1>{title}</h1>
                    <h2 onClick={() => title === 'Najwyżej oceniane' ? sortByDate() : sortByRating() }>{sortingFilms}</h2>
                </div>
                <Content items={items}/>
            </div>
        </>
    )
}