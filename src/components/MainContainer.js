import React from 'react'
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    return (
        <div className={`py-2 flex-1 ${isMenuOpen ? "ml-64" : "ml-0"}`}>
            <ButtonList />
            <VideoContainer />
        </div>
    )
}

export default MainContainer;
