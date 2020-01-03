import React from "react";
import {MovieProvider, MovieContext} from "./MovieContext";
import MoviList  from "./MovieList";
import Nav from "./Nav";
import AddMovie from "./AddMovie";

const ContextContainer = () =>{

    return(
            <MovieProvider>
                <div>
                    <Nav/>
                    <AddMovie/>
                    <MoviList/>
                </div>
            </MovieProvider>
    )
};
export default ContextContainer;
