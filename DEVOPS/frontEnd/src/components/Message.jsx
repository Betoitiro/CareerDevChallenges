import React from 'react'
import './Message.css'

const Message = ({ msg, type }) => {
    return (
        <div className={`message ${type}`}>
            {msg}
        </div>
    )
}

export default Message