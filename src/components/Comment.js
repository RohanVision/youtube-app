import React from 'react'

const Comment = ({ data }) => {
    const { name, text, replies, time } = data;

    return (
        <div className='flex items-start gap-3 border border-gray-400 my-2 p-2 rounded shadow-md'>
            <div className='flex-shrink-0'>
                <img className='h-8 w-12 rounded-full' src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="User-Icon" />
            </div>
            <div className='flex-1'>
                <p className='font-semibold text-sm text-gray-800'>{name}
                    <span className="text-xs text-gray-500 ml-2">{time} minutes ago</span></p>
                <p className='text-sm text-gray-700'>{text}</p>
            </div>
        </div>
    )
}

export default Comment
