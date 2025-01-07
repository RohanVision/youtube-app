import React from 'react'


const Comment = ({ data }) => {
    const { name, text, replies } = data;

    return (
        <div className='flex bg-gray-100 my-2 rounded'>
            <div>
                <img className='h-12' src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="User-Icon" />
            </div>
            <div>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Comment
