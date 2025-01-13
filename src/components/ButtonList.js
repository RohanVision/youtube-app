import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const list = ["All", "Gaming", "Music", "Sports", "Live", "Live", "Live", "Live", "Live", "Live", "Live", "Live", "Live", "Live", "Live", "Live", "Live", "Music", "Music", "Music", "Sports", "Sports", "Sports"]
    return (
        <div className='flex px-8 py-2 fixed top-14 w-full bg-white z-[1] overflow-x-scroll'>
            {list.map((btn, index) => {
                return (<Button key={`${btn}-${index}`} name={btn} />)
            })}
        </div>
    )
}

export default ButtonList
