import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { GOOGLE_API_KEY, VIDEO_DETAILS } from '../utils/constants';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import LikedVideoContainer from './LikedVideoContainer';
import { useMemoizeFormatter } from '../utils/viewsFormatter';


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

    // This function cache the results between re-renders of views incase they changed.
    // calling this function "unconditionally" using fallback value 0 if statistics not available
    const viewsFormatter = useMemoizeFormatter(videoDetail?.statistics?.viewCount || 0);

    // Reusing the same function for Likes Count
    const likesFormatter = useMemoizeFormatter(videoDetail?.statistics?.likeCount || 0);

    if (!videoDetail) {
        return <p>Loading...</p>; // Show a loading message while fetching data
    }

    // Destructuring the videoDetail data
    const { snippet } = videoDetail;
    const { title, channelTitle, description, thumbnails } = snippet;

    return (
        <div className='main-wrapper pt-24 px-4'>
            <div className="flex lg:flex-row gap-4">
                <div className='left-container flex-1'>
                    <iframe className="w-full aspect-video" width="1200" height="669" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    {
                        videoDetail && (
                            <div>
                                <h1 className='text-xl font-bold py-2'>{title}</h1>
                                <div className='flex justify-between shadow-sm py-2 rounded-lg'>
                                    <div className='flex items-center'>
                                        <div>
                                            <h2 className='text-lg mr-2 font-semibold'>{channelTitle}</h2>
                                            <p>{viewsFormatter} Views</p>
                                        </div>
                                        <button className='rounded-full px-4 py-2 w-36 bg-black text-white font-semibold'>Subscribe</button>
                                    </div>
                                    <div className='flex items-center'>
                                        <button className='flex gap-1 items-center rounded-full mr-2 cursor-pointer bg-gray-200 text-black hover:bg-gray-300 px-4 py-2'>
                                            <img className='w-5 h-5' src="https://icons.iconarchive.com/icons/iconsmind/outline/256/Like-icon.png" alt="like" />{likesFormatter}</button>
                                        <button className='flex gap-1 items-center rounded-full mr-2 cursor-pointer bg-gray-200 text-black hover:bg-gray-300 px-4 py-2'>
                                            <img className='w-5 h-5 text-white' src="https://cdn-icons-png.flaticon.com/512/6469/6469436.png" alt="share" /> Share</button>
                                        <button className='flex gap-1 items-center rounded-full mr-2 cursor-pointer bg-gray-200 text-black hover:bg-gray-300 px-4 py-2'>
                                            <img className='w-6 h-6' src="https://pixsector.com/cache/5d353540/av3544fca9fdc10112f68.png" alt="download" />Downloads</button>
                                    </div>
                                </div>
                                <div className='px-2 py-4 shadow-lg bg-gray-200'>
                                    <p className='line-clamp-2 overflow-hidden text-ellipsis'>{description}</p>
                                </div>
                            </div>
                        )
                    }

                </div>
                <div className='live-chats border h-[800px] border-black-200 lg:w-1/4 w-full p-2 rounded-lg'>
                    <LiveChat />
                </div>
            </div>

            {/* Mid Section */}
            <div className='flex justify-around p-2 gap-4'>
                <div className="w-3/4" >
                    <CommentsContainer />
                </div>
                <div className="w-1/4">
                    <h2 className='text-lg font-semibold py-2'>Popular Videos</h2>
                    <LikedVideoContainer />
                </div>
            </div>
        </div>
    )
}

export default WatchPage
