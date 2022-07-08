import React from "react";

const Winner =(props)=>{
    const click=()=>{
        props.restart();
    }
    var name=()=>{
        if(props.winner===1){
            return "Blue team Wins";
        }else{
            return "Orange team Wins";
        }
    }
    return (
        <div className="inline  m-auto grid content-center mt-16 p-4">

                <p className="m-auto text-5xl md:text-7xl">
                <p className="inline-block m-3">🎉🎊🎉</p> Congratulations <p className="inline-block m-3">🎉🎊🎉</p>

                </p>
                <p className={`${props.winner===1?"text-blue-400":"text-orange-400"} block my-8 m-auto text-3xl md:text-5xl`}> 
                    {name()}
                </p>
                <div>
                <button onClick={(e)=>click(e)} className="hhh text-xl md:text-2xl  hover:shadow-lg border-2 border-black p-2 rounded-lg">
                    Play Again
                </button>
                </div>
                
                
            
     </div>
    )
}

export default Winner;