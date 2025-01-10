import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if (!isMenuOpen) return null;

    return (
        <div className='p-2 shadow-lg w-60 bg-white fixed top-14 left-0 overflow-y-auto h-[calc(100vh-56px)]'>
            <ul className='pl-2 mb-6 text-md cursor-pointer border-b border-slate-200'>
                <li className='font-bold bg-slate-200 rounded-lg text-md p-1'>
                    <Link className='flex items-center justify-start' to={"/"}><img className='h-8' src="https://endlessicons.com/wp-content/uploads/2012/11/home-icon-614x460.png" alt="home" />
                        Home
                    </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src="https://www.iconpacks.net/icons/5/free-youtube-shorts-logo-icon-15253-thumb.png" alt="shorts" />Shorts</li>
                <li className="px-4 py-2 mb-4 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src="https://cdn-icons-png.flaticon.com/512/565/565285.png" alt="shorts" />Subscription</li>
            </ul>
            <h3 className='px-4 text-lg font-semibold'>You &#62; </h3>
            <ul className='pl-2 mb-6 text-md cursor-pointer border-b border-slate-200'>
                <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src="https://www.iconpacks.net/icons/3/free-history-icon-7611-thumb.png" alt="shorts" />History</li>
                <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src="https://cdn1.iconfinder.com/data/icons/youtube-23/27/Union-6-512.png" alt="shorts" />Playlist</li>
                <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src="https://static.thenounproject.com/png/3680569-200.png" alt="shorts" />Your Videos</li>
                <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src="https://cdn.iconscout.com/icon/free/png-256/free-watch-later-icon-download-in-svg-png-gif-file-formats--material-design-icons-google-action-vol-4-pack-user-interface-1513853.png" alt="shorts" />Watch Later</li>
                <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src="https://w7.pngwing.com/pngs/976/86/png-transparent-facebook-like-button-youtube-computer-icons-youtube-angle-rectangle-thumb-signal-thumbnail.png" alt="shorts" />Liked Videos</li>
            </ul>
            <h3 className='px-4 text-lg font-semibold'>Exploer</h3>
            <ul className='pl-2 mb-6 text-md cursor-pointer border-b border-slate-200'>
                <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src="https://cdn-icons-png.flaticon.com/512/1710/1710130.png" alt="shorts" />Trending</li>
                <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src="https://e7.pngegg.com/pngimages/150/187/png-clipart-youtube-tv-music-video-youtube-premium-youtube-tube-youtube-tv.png" alt="shorts" />Music</li>
                <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src="https://e7.pngegg.com/pngimages/948/748/png-clipart-clapperboard-computer-icons-film-svg-miscellaneous-angle-thumbnail.png" alt="shorts" />Movies & TV</li>
                <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src="https://img.icons8.com/?size=512&id=vjV6WNgc4Xwq&format=png" alt="shorts" />Live</li>
                <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src="https://cdn.icon-icons.com/icons2/3237/PNG/512/play_social_media_youtube_steaming_gaming_youtube_gaming_icon_197445.png" alt="shorts" />Gaming</li>
                <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-newspaper-icon-png-image_927091.jpg" alt="shorts" />News</li>
                <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src="https://w7.pngwing.com/pngs/778/496/png-transparent-light-bulb-computer-icons-incandescent-light-bulb-lamp-idea-idea-electricity-black-and-white-symbol.png" alt="shorts" />Learning</li>
                <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDoczqGPBDS4j2DaM9xRt_UFfnwocRjf_MWw&s" alt="shorts" />Fashion & Beauty</li>
                <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src="https://e7.pngegg.com/pngimages/503/700/png-clipart-podcast-computer-icons-microphone-youtube-microphone-electronics-internet-radio.png" alt="shorts" />Podcasts</li>
                <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src="https://e7.pngegg.com/pngimages/447/379/png-clipart-playlist-angle-text.png" alt="shorts" />Playables</li>
            </ul>

            <ul className='pl-2 mb-5 text-md cursor-pointer border-b border-slate-200'>
                <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src="https://static-00.iconduck.com/assets.00/settings-icon-2048x2048-ht9jo5se.png" alt="shorts" />Settigns</li>
                <li className="px-4 py-2 hover:bg-gray-100 rounded-md flex items-center justify-start"><img className='h-4 mr-4' src="https://cdn-icons-png.flaticon.com/512/6000/6000197.png" alt="shorts" />Report History</li>
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
    )
}

export default Sidebar
