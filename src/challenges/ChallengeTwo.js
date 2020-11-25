import React, { useState } from 'react'
import Axios from 'axios' 

//https://official-joke-api.appspot.com/random_joke


const ChallengeTwo = () => {
    const [joke, setJoke] = useState('')

    const getJoke = () => {
        Axios.get('https://official-joke-api.appspot.com/random_joke')
        .then((res) => {
            console.log(res)
            setJoke(res.data.setup + '...' + res.data.punchline)
        }
        )}
    return (
        <div>
            <h1>Fetch api data</h1>
            <button onClick={getJoke}>Get Random Joke</button>
            {joke}
        </div>
    )
}

export default ChallengeTwo