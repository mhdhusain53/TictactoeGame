import React from "react";

const Winner =(props)=>{
    console.log(props);
    const click=()=>{
        props.restart();
    }
    return (
        <div className="inline  m-auto grid content-center mt-16 p-4">

                <p className="m-auto text-7xl">
                🎉🎊🎉 Congratulations 🎉🎊🎉

                </p>
                <p className="block my-8 m-auto text-5xl"> 
                    Player {props.winner} Wins !!!
                </p>
                <div>
                <button onClick={(e)=>click(e)} className="text-2xl bg-purple-50 hover:bg-purple-100 hover:shadow-lg border-2 border-black p-2 rounded-lg">
                    Play Again
                </button>
                </div>
                
                
            
     </div>
    )
}

export default Winner;