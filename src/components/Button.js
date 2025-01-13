import React from 'react'

const Button = ({ name }) => {
    return (
        <div className='flex px-4 max-w-48 h-10 py-2 text-sm bg-slate-100 focus:bg-black focus:text-white font-semibold rounded-lg mx-2'>
            <button className='whitespace-nowrap'>{name}
            </button>
        </div>
    )
}

export default Button
