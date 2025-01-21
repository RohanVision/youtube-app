import React from 'react';
import { useMemoizeFormatter } from '../utils/viewsFormatter';

const LikeVideoCard = ({ info }) => {
    // console.log(info);
    const { snippet, statistics } = info;
    const { title, thumbnails, channelTitle } = snippet;
    const viewsFormatter = useMemoizeFormatter(statistics?.viewCount || 0);

    if (!info || !info.snippet) {
        // Return null or a loading placeholder if info is not available
        return <p>Loading...</p>;
    }
    return (
        <div className='flex gap-2 mb-2 items-start'>
            <div className='rounded-lg w-40 h-24 flex-shrink-0'>
                <img className='rounded-lg w-full h-full object-cover' src={thumbnails.medium.url} alt="thumb" />
            </div>
            <div>
                <p className='line-clamp-2 font-bold overflow-hidden text-ellipsis'>{title}</p>
                <p className='text-slate-500 font-semibold'>{channelTitle}</p>
                <p className='text-slate-500 text-sm font-semibold'>{viewsFormatter} Views</p>
            </div>
        </div>
    )
}

export default LikeVideoCard
