import React from 'react'

const Button = ({ name }) => {
    return (
        <div>
            <button className='py-1 px-4 bg-gray-400 rounded-full mx-2'>{name}</button>
        </div>
    )
}

export default Button
