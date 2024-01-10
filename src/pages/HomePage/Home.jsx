import React from "react"
import { Slider } from "../../components/Slider"
import { movies } from '../../data'
import '../../styles/homes.css'

export const Home = () => {
    // const theMostPopularMovie = movies.reduce((prev, current) =>
    //     prev.rating > current.rating ? prev : current
    // );

    const latestMovie = movies.sort((a, b) =>
        new Date(b.date.replace(/(\d{2}).(\d{2}).(\d{4})/, '$3-$2-$1')) - new Date(a.date.replace(/(\d{2}).(\d{2}).(\d{4})/, '$3-$2-$1'))
    )[0];

    return (
        <section className="home">
            <div className="homeContainer">
                <Slider item={latestMovie} title = 'Witaj, w Bazie Filmów!' subTitle = 'Co dziś obejrzysz?'/>
            </div>
        </section>
    );
};