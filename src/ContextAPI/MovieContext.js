import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [ movies, setMovies ] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23124
        },
        {
            name: 'Game of thrones',
            price: '$30',
            id: 23423
        },
        {
            name: 'Inception',
            price: '$20',
            id: 23425
        },
        {
            name: 'Avenger',
            price: '$25',
            id: 21125
        }
    ]);
    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}