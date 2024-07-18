import React from "react";
import decos from "/home/ga1ahad/portfolio_project/src/decos.png";

function Decos() {
    return (
        <div className="relative">
            <img src={decos} alt="Decos" className="absolute ml-[540px] -mt-[100px] w-[850px] h-[600px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
    );
}

export default Decos;
