import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { GOOGLE_API_KEY, VIDEO_DETAILS } from '../utils/constants';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import LikedVideoContainer from './LikedVideoContainer';


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
        <div className='main-wrapper pt-24 px-4'>
            <div className="flex lg:flex-row gap-4">
                <div className='left-container flex-1'>
                    <iframe className="w-full aspect-video rounded-lg shadow-lg" width="1200" height="669" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    {
                        videoDetail && (
                            <div>
                                <h1 className='text-3xl font-bold py-2'>{title}</h1>
                                <div className='flex justify-between'>
                                    <div className='flex items-center'>
                                        <div>
                                            <h2 className='text-lg mr-2 font-semibold'>{channelTitle}</h2>
                                            <p>{statistics.viewCount} Views</p>
                                        </div>
                                        <button className='rounded-full px-4 py-2 w-36 bg-gray-300 text-black font-semibold'>Subscribe</button>
                                    </div>
                                    <div className='flex items-center'>
                                        <button className='mr-2 bg-red-600 text-white rounded py-2 px-4'>{statistics.likeCount} Likes</button>
                                        <button className='mr-2 bg-red-600 text-white rounded p-2'> Downloads</button>
                                        <button className='mr-2 bg-red-600 text-white rounded p-2'> Share</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
                <div className='live-chats border h-[669px] border-black-200 lg:w-1/4 w-full p-2 rounded-lg'>
                    <LiveChat />
                </div>
            </div>

            {/* Mid Section */}
            <div className='flex justify-around p-2 gap-4'>
                <div className="w-3/4" >
                    <CommentsContainer />
                </div>
                <div className="w-1/4">
                    My Liked
                    <LikedVideoContainer />
                </div>
            </div>
        </div>
    )
}

export default WatchPage
