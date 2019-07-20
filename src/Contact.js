import React from 'react'

function Contact(props) {
    return <li>
        <img src={props.photo} />
        <span>{props.name}</span>
    </li>
}

export default Contact