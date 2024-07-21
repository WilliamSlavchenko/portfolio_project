import React from 'react';

function About1() {
    return (
        <div className="h-screen flex items-center justify-center bg-richgray">
            <div className="flex flex-col mb-[250px]">
                <p className="text-5xl font-medium mt-[6rem] mb-5 ml-[80px] text-neonic">Over the<br/> years,</p>
                <p className="text-sm max-w-xl mb-6 ml-[80px] font-bold text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus inventore id ad esse odit ex enim ut voluptatum unde quo quod veniam accusamus quos culpa alias rem veritatis, maxime non!<br/>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem molestias libero, ipsam fugiat facere, odio earum repellat sapiente incidunt excepturi obcaecati hic minima, voluptates exercitationem suscipit eveniet! Quisquam, minus. Voluptates?<br/>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, nulla autem! Suscipit modi, voluptates reiciendis harum ex aperiam sunt placeat. Voluptatem perspiciatis aut atque exercitationem officia architecto incidunt laborum quaerat?<br/>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium facilis optio, iure ea non dolor deleniti ratione quos cum dolores dolorem ab in libero molestiae. Earum, vitae quod? Aut, nulla!</p>
            </div>
            <div className="flex flex-col mt-[250px]">
                <img className="mb-[160px] w-[600px] h-[600px]" src="src/file.png" alt="" />
            </div>
        </div>
    );
}

export default About1;