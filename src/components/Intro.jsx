import React, { useState, useEffect } from "react";

function Intro() {
    const [isShortened, setIsShortened] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 0 && !isShortened) {
                setIsShortened(true);
            } else if (scrollTop === 0 && isShortened) {
                setIsShortened(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isShortened]);

    return (
        <div className="fixed top-0 left-0 right-0 z-10 py-4 px-8 border-b-0">
            <div className="flex items-center justify-between">
                <h1 className={`text-xs md:text-6xl text-neonic dark:text-neonic font-montserratAlternates font-extrabold transition duration-250 ${isShortened ? 'transform -translate-y-10' : ''}`}>
                    {isShortened ? 'W' : 'WILLIAM'}
                </h1>
                {/* Add other content or components here as needed */}
            </div>
        </div>
    );
}

export default Intro;
