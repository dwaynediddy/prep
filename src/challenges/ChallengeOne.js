import React, { useState } from 'react'


const ChallengeOne = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <h1>Number Challange</h1>
            <p>
                {counter}
            </p>
            <button onClick={() => {
               setCounter(counter + 1)
            }}>Add number</button>
        </div>
    )
}

export default ChallengeOne
