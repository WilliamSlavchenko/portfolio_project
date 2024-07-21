// src/components/Reveal.jsx
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Reveal = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true }); // triggerOnce makes sure it triggers only once
    const [hasBeenInView, setHasBeenInView] = useState(false);

    useEffect(() => {
        if (inView && !hasBeenInView) {
            controls.start('visible');
            setHasBeenInView(true);
        }
    }, [controls, inView, hasBeenInView]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variants}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
