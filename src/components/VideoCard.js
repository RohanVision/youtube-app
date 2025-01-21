import React from 'react'
import { useMemoizeFormatter } from '../utils/viewsFormatter';

const VideoCard = ({ info }) => {
    // console.log(info); // check data recived or not
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

    // This function cache the results between re-renders of views incase they changed.
    const viewsFormatter = useMemoizeFormatter(statistics?.viewCount);

    return (
        <div className='w-80 my-4'>
            <img className='rounded-xl w-full bg-contain' alt='thumbnail' src={thumbnails.medium.url} />
            <div className='flex items-start justify-start'>
                <img className='w-8 h-8 rounded-full mt-4' src={thumbnails.default.url} alt="thumbnail-small" />
                <ul className='p-2 flex flex-col text-left'>
                    <li className='font-bold py-2'>
                        <span className='line-clamp-2 overflow-hidden text-ellipsis'>{title}</span>
                    </li>
                    <li className='text-sm'>{channelTitle}</li>
                    <li>{viewsFormatter} Views</li>
                </ul>
            </div>
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
