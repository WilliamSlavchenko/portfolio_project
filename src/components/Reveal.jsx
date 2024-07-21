// src/components/Reveal.jsx
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Reveal = ({ children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [hasBeenInView, setHasBeenInView] = useState(false);

    useEffect(() => {
        if (inView && !hasBeenInView) {
            controls.start('visible');
            setHasBeenInView(true);
        }
    }, [controls, inView, hasBeenInView]);

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div ref={ref}>
            <motion.div
                animate={controls}
                initial="hidden"
                variants={sectionVariants}
                transition={{ duration: 1 }}
                className="relative overflow-hidden"
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
