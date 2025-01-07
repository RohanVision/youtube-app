import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';


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
        console.log("API CALL" + searchQuery);
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
        <div className='flex justify-between p-4 shadow-sm'>
            <div className='flex items-start'>
                <img onClick={() => toggleMenuHandler()} className='h-8 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png" alt="menu" />
                <img className='w-48 h-8' src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg" alt="Youtube-Logo" />
            </div>
            <div className='search-bar flex items-center flex-col justify-start '>
                <div>
                    <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={() => setShowSuggestion(true)} onBlur={() => setShowSuggestion(false)} className='border border-gray-300 w-96 h-8 p-4 outline-none rounded-l-full' type="text" />
                    <button className='bg-gray-200 py-2 px-4 border rounded-r-full'><img className='h-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/800px-Magnifying_glass_icon.svg.png" alt="search-icon" />
                    </button>
                </div>
                {showSuggestion && <div className='w-full relative'>
                    <ul className='fixed bg-gray-200 w-96 rounded-sm shadow-md border-gray-100'>
                        {
                            suggestion.map((suggest) => {
                                return (
                                    <li key={suggest} className='hover:bg-gray-500 hover:text-white    px-2 py-2'><img className='h-4 pr-2 inline' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/800px-Magnifying_glass_icon.svg.png" alt="search-icon" />{suggest}</li>
                                )
                            })
                        }
                    </ul>
                </div>}
            </div>
            <div className='user'>
                <img className='h-8' src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="user-icon" />
            </div>
        </div>
    )
}

export default Head
