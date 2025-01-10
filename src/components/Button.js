import React from 'react'

const Button = ({ name }) => {
    return (
        <div>
            <button className='px-4 py-2 text-sm bg-slate-100 focus:bg-black focus:text-white font-semibold rounded-lg mx-2'>{name}
            </button>
        </div>
    )
}

export default Button
