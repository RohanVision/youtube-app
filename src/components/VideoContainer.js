import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard, { AdVideoCard } from './VideoCard';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        // console.log(json.items);
        setVideos(json.items);
    }
    return (
        <div className='flex flex-wrap justify-evenly relative top-24 h-[calc(100vh-56px)]'>
            {/* Higher Order Component */}
            {videos[8] && <AdVideoCard info={videos[8]} to={"/watch?v=" + videos[0].id} />}
            {/* Higher Order Component */}

            {videos.map((video) => {
                return <Link key={video.id} to={"/watch?v=" + video.id}>
                    <VideoCard info={video} />
                </Link>
            })
            }
        </div>
    )
}

export default VideoContainer
