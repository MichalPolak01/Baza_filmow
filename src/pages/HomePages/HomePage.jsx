import React, { useState } from "react";
import {Homes} from './Homes'
import { Content } from "./Content";
import { movies } from "../../data";


export const HomePage = () => {
    const [items, setItem] = useState(movies)
    return (
        <>
            <Homes />
            <Content items={items} title='Najwyżej oceniane'/>
        </>
    )
}