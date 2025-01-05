import React from 'react'

const Sidebar = () => {
    return (
        <div className='p-4 w-40 shadow-lg h-full'>
            <ul className='pl-4 mb-6'>
                <li>Home</li>
                <li>Shorts</li>
                <li>Subscription</li>
            </ul>
            <h2 className='font-bold'>You</h2>
            <ul className='pl-4 mb-6'>
                <li>History</li>
                <li>Playlist</li>
                <li>Your Videos</li>
                <li>Watch Later</li>
                <li>Liked Videos</li>
            </ul>
            <h2 className='font-bold'>Exploer</h2>
            <ul className='pl-4'>
                <li>Trending</li>
                <li>Music</li>
                <li>Movies & TV</li>
                <li>Live</li>
                <li>News</li>
                <li>Learning</li>
                <li>Fashion & Beauty</li>
                <li>Podcasts</li>
                <li>Playables</li>
            </ul>
        </div>
    )
}

export default Sidebar
