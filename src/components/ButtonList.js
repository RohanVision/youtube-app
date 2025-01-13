import React, { useState } from 'react'
import Button from './Button'

const ButtonList = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const list = ["All", "Gaming", "Music", "Sports", "Live", "JavaScript", "Valorant", "DSA", "World", "Superhero Movies", "Comedy", "Watched", "Newly Added", "Live", "Sports"];


    const visibleCount = 3; // Number of buttons visible at once
    const totalButtons = list.length;

    const nextSlide = () => {
        setCurrentIndex((prev) => {
            const maxIndex = totalButtons - visibleCount;
            if (prev < maxIndex) {
                return prev + 1;
            }
            return prev;
        });
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => {
            if (prev > 0) {
                return prev - 1;
            } else {
                return prev;
            }
        })
    }


    return (
        <div className="flex fixed top-14 w-10/12 mx-5 py-2 bg-white z-[1] overflow-hidden">
            <div
                className="flex relative transition-transform duration-300 mx-auto"
                style={{
                    transform: `translateX(-${currentIndex * 200}px)`,
                }}
            >
                {list.map((btn, index) => (
                    <Button key={`${btn}-${index}`} name={btn} />
                ))}
            </div>

            {/* Left Button */}
            {currentIndex > 0 && (
                <button
                    className="arrow-prev absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10
                 hover:bg-slate-300 rounded-full font-bold text-lg"
                    onClick={prevSlide}
                >
                    &lt;
                </button>
            )}

            {/* Right Button */}
            {currentIndex < totalButtons - visibleCount && (
                <button
                    className="arrow-next mr-2 absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 hover:bg-slate-300 rounded-full font-bold text-lg"
                    onClick={nextSlide}
                >
                    &gt;
                </button>
            )}
        </div>
    );
}

export default ButtonList
