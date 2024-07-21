import React from "react";
import splitStringUsingRegex from "../utils/splitStringUsingRegex";
import { motion } from "framer-motion";

const heading = "Front End Developer";
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, cum dignissimos perferendis illo vero libero nihil quidem ullam culpa nesciunt odit neque accusamus suscipit aperiam temporibus odio quas quia impedit!";
const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
};

function Introtext() {
    const headingWords = heading.split(" ");
    let headingChars = headingWords.flatMap((word, index) => [
        ...splitStringUsingRegex(word),
        index < headingWords.length - 1 ? " " : ""
    ]);

    // Insert a break element between "End" and "Developer"
    headingChars = headingChars.flatMap((char, index) => 
        char === " " && headingWords[headingWords.length - 2] === "End"
        ? [<br key="br" />, char]
        : [char]
    );

    const textChars = splitStringUsingRegex(text);

    return (
        <div className="flex flex-col">
            <motion.p initial="hidden" whileInView="reveal" transition={{ staggerChildren: 0.02 }} className="text-8xl mt-[13rem] mb-5 ml-[80px] font-light text-neonic">
                {headingChars.map((char, index) => (
                    <motion.span key={index} transition={{ duration: 0.5 }} variants={charVariants}>
                        {char}
                    </motion.span>
                ))}
            </motion.p>
            <motion.p initial="hidden" whileInView="reveal" transition={{ staggerChildren: 0.02 }} className="text-sm max-w-xl mb-6 ml-[80px] font-bold text-white">
                {textChars.map((char, index) => (
                    <motion.span key={index} transition={{ duration: 0.5 }} variants={charVariants}>
                        {char}
                    </motion.span>
                ))}
            </motion.p>
        </div>
    );
}

export default Introtext;