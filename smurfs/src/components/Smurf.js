import React from 'react'

const Smurf = (props) => {
    const { smurf } = props;
    return (
        <div className="card">
            <h5>{smurf.name}</h5>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>

        </div>
    )
}
export default Smurf;