import React from 'react'

const VideoCard = ({ info }) => {
    // console.log(info); // check data recived or not
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    return (
        <div className='w-80 my-4'>
            <img className='rounded-xl w-full bg-contain' alt='thumbnail' src={thumbnails.medium.url} />

            <div className='flex items-start justify-start'>

                <img className='w-8 h-8 rounded-full mt-4' src={thumbnails.default.url} alt="thumbnail-small" />

                <ul className='p-2 flex flex-col text-left'>
                    <li className='font-bold py-2 h-auto flex'>
                        <span>{title}</span>
                    </li>
                    <li className='text-sm'>{channelTitle}</li>
                    <li>{statistics.viewCount} Views</li>
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
