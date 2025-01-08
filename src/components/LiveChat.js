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
            console.log("API POLLING"); // isntead of We need to fetch live chat data converted to JSON
            dispatch(addMessage({
                name: generateRandomName(),
                message: randomMessage(20) + "🚀",
            }))
        }, 2000);

        return () => clearInterval(messageTimer);

    }, []);


    return (
        <>
            <div className='mt-4 border flex flex-col-reverse w-full h-[600px] border-black p-4 rounded-lg bg-slate-100 overflow-y-scroll'>
                <div>
                    {
                        chatMessages.map((c, index) => {
                            return <ChatMessage key={index} name={c.name} message={c.message} />
                        })
                    }
                </div>
            </div>
            <form className='w-full flex border' onSubmit={(e) => {
                e.preventDefault();
                dispatch(addMessage({
                    name: "Rohan",
                    message: liveMessage,
                }));
                setLiveMessage("")
            }}>
                <input type="text" className='py-1 px-2 w-96' value={liveMessage}
                    onChange={(e) => setLiveMessage(e.target.value)} />
                <button className='bg-gray-200  rounded-sm '>Submit</button>
            </form>
        </>
    )
}

export default LiveChat
