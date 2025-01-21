import React from 'react'

function Task() {
    const description = "JSX stands for JavaScript XML. It allows us to write HTML elements in JavaScript and place them in the DOM using a syntax that is easy to understand and use.";
    return (
        <div>
            <h1>Welcome to jsx</h1>
            <p>{description}</p>
        </div>
    )
}

export default Task
