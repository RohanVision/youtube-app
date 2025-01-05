import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        console.log(json.items);
        setVideos(json.items);
    }
    return (
        <div className='flex flex-wrap justify-evenly'>
            {
                videos.map((video) => {
                    return <VideoCard key={video.id} info={video} />
                })
            }
        </div>
    )
}

export default VideoContainer
