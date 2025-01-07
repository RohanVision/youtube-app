import React from 'react'
import ChatMessage from './ChatMessage'

const LiveChat = () => {
    return (
        <div className='mt-4  border w-full h-[600px] border-black p-4 rounded-lg bg-slate-100'>
            <ChatMessage name="Rohan Amberkar" message={"This is testing message"} />
        </div>
    )
}

export default LiveChat
