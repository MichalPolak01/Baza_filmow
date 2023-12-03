import React from "react"


export const Slider = ({item: {id, name, rating, description, actors, director, 
    generies, img, background, date, publicationDate}, title, subTitle}) => {
    return (
        <>
            <div className="coverImage">
                <img src={background} alt="" />
            </div>
            <div className="texts">
                <h1>{title}</h1>
                <h2>{subTitle}</h2>
            </div>
        </>
    )
}