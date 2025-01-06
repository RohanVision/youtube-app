import React from 'react'

const VideoCard = ({ info }) => {
    // console.log(info); // check data recived or not
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    return (
        <div className='w-80 shadow-md my-4'>
            <img className='rounded w-full' alt='thumbnail' src={thumbnails.medium.url} />
            <ul className='p-2 flex flex-col'>
                <li className='font-bold py-2 h-14 overflow-hidden'>{title}</li>
                <li className='font-semibold'>{channelTitle}</li>
                <li>{statistics.viewCount} Views</li>
            </ul>
        </div>
    )
}

export default VideoCard
