import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { GOOGLE_API_KEY, VIDEO_DETAILS } from '../utils/constants';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';


const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const [videoDetail, setVideoDetail] = useState(null);
    // console.log(searchParams.get("v"));
    const videoId = searchParams.get("v");


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
        getVideoDetails();
    }, []);


    const getVideoDetails = async () => {
        const data = await fetch(`${VIDEO_DETAILS}${videoId}&key=${GOOGLE_API_KEY}`);
        const json = await data.json();;
        // console.log(json.items);
        setVideoDetail(json.items[0] || null);
    }

    if (!videoDetail) {
        return <p>Loading...</p>; // Show a loading message while fetching data
    }

    // Destructuring the videoDetail data
    const { snippet, statistics } = videoDetail;
    const { title, channelTitle } = snippet;

    return (
        <div className='watchPage-wrapper flex flex-col w-full mt-12'>
            <div className='flex w-full'>
                <div className='left'>
                    <div className='py-4 pl-4'>
                        <iframe width="1200" height="600" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        {
                            videoDetail && (
                                <div>
                                    <h1 className='text-3xl font-bold py-2'>{title}</h1>
                                    <div className='flex justify-between'>
                                        <div className='flex'>
                                            <div>
                                                <h2 className='text-lg mr-2 font-semibold'>{channelTitle}</h2>
                                                <p>{statistics.viewCount} Views</p>
                                            </div>
                                            <button className='rounded-full px-4 w-36 bg-gray-300 text-black font-semibold'>Subscribe</button>
                                        </div>
                                        <div>
                                            <p className='mr-2 bg-red-600 text-white rounded p-2'>{statistics.likeCount} Likes</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
                <div className='live-chats w-full mx-2'>
                    <LiveChat />
                </div>
            </div>
            <CommentsContainer />
        </div>
    )
}

export default WatchPage
