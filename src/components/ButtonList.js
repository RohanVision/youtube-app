import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const list = ["All", "Gaming", "Music", "Sports", "Live"]
    return (
        <div className='flex px-8 py-4'>
            {list.map((btn, index) => {
                return (<Button key={`${btn}-${index}`} name={btn} />)
            })}
        </div>
    )
}

export default ButtonList
