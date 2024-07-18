import React from 'react';

function RotatingSquares({ introIsVisible, aboutIsVisible, about1IsVisible, projectsIsVisible, contactIsVisible }) {
    const getSquareColor = () => {
        if (introIsVisible || projectsIsVisible) return 'bg-richgray';
        if (aboutIsVisible || about1IsVisible || contactIsVisible) return 'bg-neonic';
        return 'bg-neonic'; // default color
    };


    return (
        <div className="fixed bottom-4 right-4 transform translate-x-[-50px] flex flex-col space-y-4">
            <div className={`w-5 h-5 ${getSquareColor()} transform transition-transform duration-500 ${introIsVisible ? 'rotate-45 outline outline-richgray bg-white' : ''}`}></div>
            <div className={`w-5 h-5 ${getSquareColor()} transform transition-transform duration-500 ${aboutIsVisible ? 'rotate-45 outline outline-neonic bg-white' : ''}`}></div>
            <div className={`w-5 h-5 ${getSquareColor()} transform transition-transform duration-500 ${about1IsVisible ? 'rotate-45 outline outline-neonic bg-white' : ''}`}></div>
            <div className={`w-5 h-5 ${getSquareColor()} transform transition-transform duration-500 ${projectsIsVisible ? 'rotate-45 outline outline-neonic bg-white' : ''}`}></div>
            <div className={`w-5 h-5 ${getSquareColor()} transform transition-transform duration-500 ${contactIsVisible ? 'rotate-45 outline outline-neonic bg-white' : ''}`}></div>
        </div>
    );
}

export default RotatingSquares;
