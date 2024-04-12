import React from 'react'

function ErrorMsg({ message }) {
    return (
        <div>
            <h1 className='text-2xl font-bold p-5'>{message}</h1>
        </div>
    )
}

export default ErrorMsg
