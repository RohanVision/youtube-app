import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, randomMessage } from '../utils/nameHelper';


const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const messageTimer = setInterval(() => {
            // console.log("API POLLING"); // isntead of We need to fetch live chat data converted to JSON
            dispatch(addMessage({
                name: generateRandomName(),
                message: randomMessage(20) + "🚀",
            }))
        }, 2000);

        return () => clearInterval(messageTimer);

    }, []);


    return (
        <>
            <div className='flex justify-between border-b-slate-50 border-b-2 my-2 px-2'>
                <h2 className='font-semibold'>Top Chat</h2>
                <span className='text-lg'>X</span>
            </div>
            <div className='flex flex-col-reverse w-full h-[670px] rounded-lg overflow-y-scroll'>
                <div>
                    {
                        chatMessages.map((c, index) => {
                            return <ChatMessage key={index} name={c.name} message={c.message} />
                        })
                    }
                </div>
            </div>
            <form className='w-full flex my-2' onSubmit={(e) => {
                e.preventDefault();
                dispatch(addMessage({
                    name: "Rohan",
                    message: liveMessage,
                }));
                setLiveMessage("")
            }}>
                <input type="text" className='border border-red-400 border-opacity-45 w-80 p-2 rounded-l-md outline-none' value={liveMessage}
                    onChange={(e) => setLiveMessage(e.target.value)} />
                <button className='bg-red-500 text-white py-2 px-4 rounded-r-md '>Submit</button>
            </form>
        </>
    )
}

export default LiveChat
