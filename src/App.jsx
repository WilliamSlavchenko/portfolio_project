import React from 'react';
import { useInView } from "react-intersection-observer";
import Intro from './components/Intro';
import Body from './components/Body';
import Square from './components/Square';
import About from './components/About';
import About1 from './components/About1';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Decos from './components/Decos';

function App() {
    const { ref: introRef, inView: introIsVisible } = useInView();   
    return (
        <div className="App h-screen overflow-y-auto">
            <div className="relative flex h-screen">
                <div ref = {introRef} className="flex-grow-0 flex-shrink-0 basis-4/6 bg-richgray h-full">
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
        </div>
    );
}

export default App;
