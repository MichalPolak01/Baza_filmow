import React from "react";
import { movies } from '../../data'
import { Home } from "./Home";
import '../../styles/homes.css'

export const Homes = () => {
    const theMostPopularMovie = movies.reduce((prev, current) =>
        prev.rating > current.rating ? prev : current
    );

    return (
        <>
            <section className="home">
                <Home items={[theMostPopularMovie]} />
            </section>
            <div className="margin"></div>
        </>
    )
}


