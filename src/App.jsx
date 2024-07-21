import React from 'react';
import { useInView } from 'react-intersection-observer';
import Intro from './components/Intro';
import Introtext from './components/Introtext';
import Square from './components/Square';
import About from './components/About';
import About1 from './components/About1';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Decos from './components/Decos';
import RotatingSquares from './components/RotatingSquares';
import Reveal from './components/Reveal'; // Import the Reveal component

function App() {
    const { ref: introRef, inView: introIsVisible } = useInView({ threshold: 0.5 });
    const { ref: aboutRef, inView: aboutIsVisible } = useInView({ threshold: 0.5 });
    const { ref: about1Ref, inView: about1IsVisible } = useInView({ threshold: 0.5 });
    const { ref: projectsRef, inView: projectsIsVisible } = useInView({ threshold: 0.5 });
    const { ref: contactRef, inView: contactIsVisible } = useInView({ threshold: 0.5 });
    const { ref: bodyRef, inView: bodyIsVisible } = useInView({ threshold: 0.5 });

    return (
        <div className="App h-screen overflow-y-auto">
            <div className="relative flex h-screen">
                <div ref={introRef} className="flex-grow-0 flex-shrink-0 basis-4/6 bg-richgray h-full">
                    <Intro bodyIsVisible={bodyIsVisible} />
                    <div ref={bodyRef}>
                        <Introtext />
                    </div>
                    <Decos />
                    <Square />
                </div>
                <div className="flex-grow-0 flex-shrink-0 basis-2/6 bg-neonic h-full"></div>
            </div>
            <Reveal>
                <div ref={aboutRef}>
                    <About />
                </div>
            </Reveal>
            <Reveal>
                <div ref={about1Ref}>
                    <About1 />
                </div>
            </Reveal>
            <Reveal>
                <div ref={projectsRef}>
                    <Projects />
                </div>
            </Reveal>
            <Reveal>
                <div ref={contactRef}>
                    <Contact />
                </div>
            </Reveal>
            <RotatingSquares
                introIsVisible={introIsVisible}
                aboutIsVisible={aboutIsVisible}
                about1IsVisible={about1IsVisible}
                projectsIsVisible={projectsIsVisible}
                contactIsVisible={contactIsVisible}
            />
        </div>
    );
}

export default App;
