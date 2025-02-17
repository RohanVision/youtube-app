import React from 'react'
import { SIDEBAR_IMG } from '../utils/constants';
import { EXPLORER_IMG } from '../utils/constants';
import { SETTINGS_IMG } from '../utils/constants';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if (!isMenuOpen) return null;

    return (
        <div
            className={`${isMenuOpen ? 'md:w-0 w-full bg-black z-50 opacity-55 fixed top-14 left-0 h-[calc(100vh-56px)]' : 'w-full'}`}>
            <div
                className={`${isMenuOpen
                    ? 'block md:w-60 w-64 p-2 z-50 shadow-lg bg-white fixed top-14 left-0 overflow-y-auto h-[calc(100vh-56px)]'
                    : 'hidden'}`}>
                <ul className='pl-2 mb-6 text-md cursor-pointer border-b border-slate-200'>
                    <li className='font-bold bg-slate-200 rounded-lg text-md p-1'>
                        <Link className='flex items-center justify-start' to={"/"}>
                            <img className='h-8' src={SIDEBAR_IMG.HOME} alt="home" />
                            Home
                        </Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src={SIDEBAR_IMG.SHORTS} alt="shorts" />Shorts</li>
                    <li className="px-4 py-2 mb-4 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src={SIDEBAR_IMG.SUBSCRIPTION} alt="shorts" />Subscription</li>
                </ul>
                <h3 className='px-4 text-lg font-semibold'>You &#62; </h3>
                <ul className='pl-2 mb-6 text-md cursor-pointer border-b border-slate-200'>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src={SIDEBAR_IMG.HISTORY} alt="shorts" />History</li>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src={SIDEBAR_IMG.PLAYLIST} alt="shorts" />Playlist</li>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src={SIDEBAR_IMG.YOUR_VIDEOS} alt="shorts" />Your Videos</li>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src={SIDEBAR_IMG.WATCH_LATER} alt="shorts" />Watch Later</li>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src={SIDEBAR_IMG.LIKED_VIDEOS} alt="shorts" />Liked Videos</li>
                </ul>
                <h3 className='px-4 text-lg font-semibold'>Exploer</h3>
                <ul className='pl-2 mb-6 text-md cursor-pointer border-b border-slate-200'>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src={EXPLORER_IMG.TRENDING} alt="shorts" />Trending</li>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src={EXPLORER_IMG.MUSIC} alt="shorts" />Music</li>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src={EXPLORER_IMG.MOVIES_TV} alt="shorts" />Movies & TV</li>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src={EXPLORER_IMG.LIVE} alt="shorts" />Live</li>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src={EXPLORER_IMG.GAMING} alt="shorts" />Gaming</li>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src={EXPLORER_IMG.NEWS} alt="shorts" />News</li>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src={EXPLORER_IMG.LEARNING} alt="shorts" />Learning</li>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src={EXPLORER_IMG.FASHION_BEAUTY} alt="shorts" />Fashion & Beauty</li>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src={EXPLORER_IMG.PODCASTS} alt="shorts" />Podcasts</li>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src={EXPLORER_IMG.PLAYABLES} alt="shorts" />Playables</li>
                </ul>

                <ul className='pl-2 mb-5 text-md cursor-pointer border-b border-slate-200'>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src={SETTINGS_IMG.SETTINGS} alt="shorts" />Settigns</li>
                    <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src={SETTINGS_IMG.REPORT_HISTORY} alt="shorts" />Report History</li>
                </ul>
                <ul className='flex flex-wrap pl-2 mb-2 text-sm cursor-pointer'>
                    <li className='mr-2'>Abouts</li>
                    <li className='mr-2'>Press</li>
                    <li className='mr-2'>Copyright</li>
                    <li className='mr-2'>Contact</li>
                    <li className='mr-2'>usCreators </li>
                    <li className='mr-2'>Advertise</li>
                    <li>Developerss</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
