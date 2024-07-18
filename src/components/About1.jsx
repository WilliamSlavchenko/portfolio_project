import React from 'react';

function About1() {
    return (
        <div className="h-screen flex items-center justify-center bg-richgray">
            <div className="flex flex-col mb-[250px]">
                <p className="text-5xl font-medium mt-[6rem] mb-5 ml-[80px] text-neonic">Over the<br/> years,</p>
                <p className="text-sm max-w-xl mb-6 ml-[80px] font-bold text-white">I've built products for companies and businesses around the globe ranging from marketing websites to complex solutions and enterprise apps with focus on fast, elegant and accessible user experiences.<br/>
Currently, I work at Shopify as a Senior Frontend Engineer crafting thoughtful and inclusive experiences that adhere to web standards for over 3 million merchants across the world.<br/>
Before now, I was Principal Frontend Engineer at hellotax, where I worked on a suite of tools and services tailored towards automated VAT compliance for multi-channel sellers in Europe.<br/>
Prior to hellotax, I was Senior frontend engineering consultant with Pixel2HTML, building JavaScript applications and interfaces for orgs and individuals.<br/>
I once also led the frontend team at Conectar, an e-learning startup through building multiple React applications into a single robust learning platform.</p>
            </div>
            <div className="flex flex-col mt-[250px]">
                <p className="text-6xl font-medium ml-[80px] text-white">Cringe corporate <br/>art <br/>that vaguely looks<br/> like me</p>
            </div>
        </div>
    );
}

export default About1;