import React from 'react'
const person = (props) => {
    return (
        <div>
            <p>this is person {props.name} {props.age} {props.sex}</p>
            <p>
                {props.children}
            </p>
        </div>
    )
}

export default person;