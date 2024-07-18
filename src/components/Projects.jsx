import React from 'react';

function Projects() {
    return (
        <div className="h-screen flex items-center justify-center bg-white relative">
            <div className="flex flex-col items-start">
                <p className="text-6xl mt-[6rem] mb-5 ml-[80px] font-light text-richgray">I build stuff</p>
                <p className="text-sm max-w-xl mb-6 ml-[80px] font-bold text-black">And I am a really cool guy who will become a developer making fucktons of cash sooner than everyone would expect</p>
                <a
                    href="https://github.com/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border-2 border-blue-500 text-blue-500 font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline mt-4 inline-block"
                    style={{ minWidth: '150px', fontSize: '16px', transform: 'translateX(50px)', borderRadius: '0' }}
                >
                    See my work
                </a>
            </div>
            <div className="w-[5px] bg-richgray absolute top-[calc(6rem+20px)] bottom-[20px] left-1/2 transform -translate-x-1/2"></div>
            <div className="flex flex-col items-start">
                <p className="text-6xl mt-[6rem] mb-5 ml-[80px] font-light text-richgray">I build stuff</p>
                <p className="text-sm max-w-xl mb-6 ml-[80px] font-bold text-black">And I am a really cool guy who will become a developer making fucktons of cash sooner than everyone would expect</p>
                <a
                    href="https://github.com/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border-2 border-blue-500 text-blue-500 font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline mt-4 inline-block"
                    style={{ minWidth: '150px', fontSize: '16px', transform: 'translateX(50px)', borderRadius: '0' }}
                >
                    See my work
                </a>
            </div>
        </div>
    );
}

export default Projects;
