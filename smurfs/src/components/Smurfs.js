import React from 'react';


export default ({ smurfs: { name, age, height, id } }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{height}</p>

        </div>
    )
}

