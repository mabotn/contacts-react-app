import React from 'react'

function Button(props) {
    return <button className={props.theme} onClick={props.onClick}>{props.content}</button>
}

export default Button