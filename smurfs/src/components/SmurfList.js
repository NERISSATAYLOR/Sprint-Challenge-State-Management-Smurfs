import React, { useContext, useEffect } from 'react';




const SmurfList = props => {
    const context = useContext(SmurfContext);
    useEffect(() => {
        axios.get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res.data)
                    .catch(err => {

                    });
                // run action creator when the component mounts
                console.log(context);
            }, []);

        if (isFetching) {
            return <h2>Fetching smurf for ya!</h2>;
        }

        return (
            <div>
                <h2>Papa Smurf is calling you!: </h2>
                {smurfs.map(smurf => (
                    <div key={smurf.id}>
                        <p>Name: {smurf.name}</p>
                        <p>Age:{smurf.age}</p>
                        <p>Height: {smurf.height}</p>

                    </div>
                ))}
            </div>
        );
    };
    export default SmurfList;