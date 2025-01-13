import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import { Link } from 'react-router-dom';

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestion, setSuggestion] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const dispatch = useDispatch();
    // subscribe to searchSlice
    const searchCache = useSelector((store) => store.search);

    // Call the API on every Search Query user made
    // Well Optimise Search - Search is using live API, Debouncing, Caching
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestion(searchCache[searchQuery]);
            } else {
                return getSearchSuggestion();
            }
        }, 200);
        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery]);

    // Fetch the Search Suggestion API
    const getSearchSuggestion = async () => {
        // console.log("API CALL" + searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        // console.log(json);
        setSuggestion(json[1]);
        // Update cache by dispatching the cacheResults
        dispatch(cacheResults({
            [searchQuery]: json[1],
        }));
    }

    // Toggle Sidbar
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className='flex items-center justify-between flex-row px-4 h-14 fixed w-full top-0 left-0 bg-white z-10'>
            <div className='flex'>
                <img onClick={() => toggleMenuHandler()} className='h-6 mr-4 cursor-pointer' src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png" alt="menu" />
                <a href={'/'}><img className='h-5 cursor-pointer' src="https://cdnlogo.com/logos/y/73/youtube.svg" alt="Youtube-Logo" /></a>
                {/* <Link to={"/"}><img className='h-5 cursor-pointer' src="https://cdnlogo.com/logos/y/73/youtube.svg" alt="Youtube-Logo" /></Link> */}
            </div>
            <div className='search-bar flex flex-col justify-start w-auto items-center'>
                <div className='flex items-center h-10'>
                    <input type="text" placeholder='Search' className='border border-gray-200 w-[450px] h-10 py-2 px-4 outline-none rounded-l-full' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={() => setShowSuggestion(true)} onBlur={() => setShowSuggestion(false)} />
                    <button className='bg-gray-200 h-10 py-2 px-4 border border-gray-200 rounded-r-full'><img className='h-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/800px-Magnifying_glass_icon.svg.png" alt="search-icon" />
                    </button>
                </div>
                {showSuggestion && <div className='fixed mr-6 top-12 w-[420px] bg-white z-10 rounded-2xl'>
                    <ul className='bg-white-200  shadow-md border-gray-100 z-10 pb-4'>
                        {
                            suggestion.map((suggest) => {
                                return (
                                    <li key={suggest} className='hover:bg-slate-100 text-black px-4 py-2'><img className='h-4 pr-2 inline' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/800px-Magnifying_glass_icon.svg.png" alt="search-icon" />{suggest}</li>
                                )
                            })
                        }
                    </ul>
                </div>}
            </div>
            <div className='user flex'>
                <img className="h-6 mr-4" src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png" alt="notification" />
                <img className='h-6' src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="user-icon" />
            </div>
        </div>
    )
}

export default Head
