import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [hasBeenInView, setHasBeenInView] = useState(false);

    useEffect(() => {
        if (inView && !hasBeenInView) {
            controls.start('visible');
            setHasBeenInView(true);
        }
    }, [controls, inView, hasBeenInView]);

    const textVariants = {
        hidden: { opacity: 0, x: '-100%' },
        visible: { opacity: 1, x: '0%' }
    };

    return (
        <div ref={ref} className="h-screen flex items-center justify-center bg-white">
            <div className="flex flex-col mb-[250px]">
                <motion.p
                    className="text-6xl font-medium mt-[6rem] mb-5 ml-[80px] text-richgray"
                    initial="hidden"
                    animate={controls}
                    variants={textVariants}
                    transition={{ duration: 1 }}
                >
                    Engineering <br />Developer
                </motion.p>
                <motion.p
                    className="text-sm max-w-xl mb-6 ml-[80px] font-bold text-black"
                    initial="hidden"
                    animate={controls}
                    variants={textVariants}
                    transition={{ duration: 1 }}
                >
                    In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalability are priorities on my radar.
                </motion.p>
            </div>
            <div className="flex flex-col mt-[250px]">
                <motion.p
                    className="text-6xl font-medium mt-[6rem] mb-5 ml-[80px] text-richgray"
                    initial="hidden"
                    animate={controls}
                    variants={textVariants}
                    transition={{ duration: 1 }}
                >
                    Engineering <br />Developer
                </motion.p>
                <motion.p
                    className="text-sm max-w-xl mb-6 ml-[80px] font-bold text-black"
                    initial="hidden"
                    animate={controls}
                    variants={textVariants}
                    transition={{ duration: 1 }}
                >
                    In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently of them to deliver fast, resilient solutions optimized for scale — performance and scalability are priorities on my radar.
                </motion.p>
            </div>
        </div>
    );
}

export default About;
