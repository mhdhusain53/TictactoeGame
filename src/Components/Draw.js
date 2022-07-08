import React from "react";

const Draw = (props)=>{

    const click=()=>{
        props.restart();
    }

    return (
        <div className="inline  m-auto grid content-center mt-16 p-4">
            <p className="m-auto text-5xl md:text-7xl">Draw !!</p>
            <div>
                <button onClick={(e)=>click(e)} className="hhh text-xl md:text-2xl my-8 hover:shadow-lg border-2 border-black p-2 rounded-lg">
                    Play Again
                </button>
                </div>
        </div>
    )
}

export default Draw;