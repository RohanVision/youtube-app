import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex items-center flex-wrap my-2'>
            <div>
                <img className='h-6' src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="User-Icon" />
            </div>
            <div>
                <span className='font-bold px-2'>{name} : </span>
                <span>{message}</span>
            </div>
        </div>
    )
}

export default ChatMessage
