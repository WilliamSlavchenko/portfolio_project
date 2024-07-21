import React from "react";
import square from "/home/ga1ahad/portfolio_project/src/square.png";

function Square() {
    return (
        <div className="relative">
            <img src={square} alt="Square" className="absolute -mt-[200px] ml-[495px] w-[450px] h-[450px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
    );
}

export default Square;
