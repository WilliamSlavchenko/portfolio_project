import React from 'react';
import Intro from './components/Intro';
import Body from './components/Body';
import Square from './components/Square';
import About from './components/About';
import About1 from './components/About1';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Decos from './components/Decos';
import RotatingSquares from './components/RotatingSquares';

function App() {
    return (
        <div className="App h-screen overflow-y-auto">
            <div className="relative flex h-screen">
                <div className="flex-grow-0 flex-shrink-0 basis-4/6 bg-richgray h-full">
                    <Intro />
                    <Body />
                    <Decos/>
                    <Square/>
                </div>
                <div className="flex-grow-0 flex-shrink-0 basis-2/6 bg-neonic h-full">
                </div>
            </div>
            <About />
            <About1 />
            <Projects />
            <Contact />
            <RotatingSquares /> {/* Include RotatingSquares component */}
        </div>
    );
}

export default App;