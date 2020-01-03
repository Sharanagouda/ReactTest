import React,{useContext} from "react";
import "./styles.css"
import {MovieContext } from "./MovieContext";

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return(
        <div className="mainDiv">
            <div> <h4>Sharanagouda </h4></div>
            <h4>List of movies: {movies.length}</h4>
        </div>
    )
}

export default Nav;