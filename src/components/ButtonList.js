import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const list = ["All", "Gaming", "Music", "Sports", "Live"]
    return (
        <div className='flex '>
            {list.map((btn, index) => {
                return (<Button key={`${btn}-${index}`} name={btn} />)
            })}
        </div>
    )
}

export default ButtonList
