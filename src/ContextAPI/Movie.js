import React from "react";

const Movie = ({ name, price }) => {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <h3>{name}</h3> <p> -- </p>
            <p>{price}</p>
        </div>
    )
}

export default Movie;