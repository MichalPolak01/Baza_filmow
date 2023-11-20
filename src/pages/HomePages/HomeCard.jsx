import React from "react"


export const HomeCard = ({item: {id, name, rating, description, actors, director, 
    generies, img, background, date, publicationDate}}) => {
    return (
        <>
            <div className="box">
                <div className="coverImage">
                    <img src={background} alt="" />
                    
                </div>
                <div className="texts"></div>
                    <h1>Witaj, w Bazie Filmów!</h1>
                    <h2>Co dziś obejrzysz?</h2>
            </div>
        </>
    )
}