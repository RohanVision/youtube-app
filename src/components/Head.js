import React from 'react'

const Head = () => {
    return (
        <div className='flex justify-between p-4 shadow-sm'>
            <div className='flex items-start'>
                <img className='h-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png" alt="menu" />
                <img className='w-48 h-8' src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg" alt="Youtube-Logo" />
            </div>
            <div className='search-bar flex items-center'>
                <input className='border border-gray-300 w-96 h-8 p-4 outline-none rounded-l-full' type="text" />
                <button className='bg-gray-200 py-2 px-4 border rounded-r-full'><img className='h-4' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/800px-Magnifying_glass_icon.svg.png" alt="" /></button>
            </div>
            <div className='user'>
                <img className='h-8' src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" alt="user-icon" />
            </div>
        </div>
    )
}

export default Head
