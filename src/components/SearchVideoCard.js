import React from 'react'

const SearchVideoCard = ({ info }) => {
    // console.log(info); // check data recived or not
    const { snippet } = info;
    const { channelTitle, title, thumbnails, description } = snippet;

    return (
        <div>
            <div className="border rounded-lg p-4 shadow flex items-start gap-4">
                <img
                    src={thumbnails.medium.url}
                    alt={title}
                    className="rounded w-48"
                />
                <div className="flex flex-col">
                    <h2 className="text-lg font-bold">{title}</h2>
                    <p className="text-sm text-gray-500">{channelTitle}</p>
                    <p className='line-clamp-2 overflow-hidden text-ellipsis'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default SearchVideoCard
