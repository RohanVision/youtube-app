import React, { useEffect, useState } from 'react'
import { YOUTUBE_MY_VIDEO } from '../utils/constants'
import LikeVideoCard from './LikeVideoCard';

const LikedVideoContainer = () => {
    const [video, setVideos] = useState([]);

    useEffect(() => {
        getLikedVideo();
    }, [])

    const getLikedVideo = async () => {
        const data = await fetch(YOUTUBE_MY_VIDEO);
        const json = await data.json();
        // console.log(json.items);
        setVideos(json?.items)
    }

    return (
        <div>
            {
                video.map((videos) => {
                    return <LikeVideoCard key={videos.id} info={videos} />
                })
            }
        </div>
    )
}

export default LikedVideoContainer
