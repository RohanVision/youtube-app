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

// Higher Order Component
// export const AdVideoCard = ({ info }) => {
//     return (
//         <div className='border-red-500 relative'>
//             <p className='bg-black p-2 text-white w-10 rounded-md absolute left-0'>Ad</p>
//             <VideoCard info={info} />
//         </div>
//     )
// }

export default VideoCard;
