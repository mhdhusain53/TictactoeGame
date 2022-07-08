import React, { useState } from "react";

const Orange =(props)=>{
    const [select,setSelected]=useState({});

    const click=(event)=>{
        props.setSelected(event.target.name);
        setSelected(parseInt(event.target.name))

    }


    return(
        <div className=" p-2  m-auto mt-2 flex justify-center items-center">


            <div className="inline-block w-28  mr-2"  >
                <img src="./images/orange.png" name='7' onClick={(e)=>click(e)} className={`${select===7&&props.items.b[0]===1?" shadow-2xl ":""} rounded-full cursor${props.items.b[0]===1?'-pointer hover:shadow-lg':'-not-allowed opacity-30'}`} alt="orange" />
            </div>
            <div className=" inline-block w-24 mr-2 ">
                <img src="./images/orange.png" name='8' onClick={(e)=>click(e)} className={`${select===8&&props.items.b[1]===1?" shadow-2xl ":""} rounded-full cursor${props.items.b[1]===1?'-pointer hover:shadow-lg':'-not-allowed opacity-30'}`} alt="orange" />
            </div>
            <div className="inline-block w-20  mr-2">
                <img src="./images/orange.png" name='9' onClick={(e)=>click(e)} className={`${select===9&&props.items.b[2]===1?" shadow-2xl ":""} rounded-full cursor${props.items.b[2]===1?'-pointer hover:shadow-lg':'-not-allowed opacity-30'}`} alt="orange" />
            </div>
            <div className=" inline-block w-16  mr-2 ">
                <img src="./images/orange.png" name='10' onClick={(e)=>click(e)} className={`${select===10&&props.items.b[3]===1?" shadow-2xl ":""} rounded-full cursor${props.items.b[3]===1?'-pointer hover:shadow-lg':'-not-allowed opacity-30'}`} alt="orange" />
            </div>
            <div className="inline-block w-14 mr-2">
                <img src="./images/orange.png" name='11' onClick={(e)=>click(e)} className={`${select===11&&props.items.b[4]===1?" shadow-2xl ":""} rounded-full cursor${props.items.b[4]===1?'-pointer hover:shadow-lg':'-not-allowed opacity-30'}`} alt="orange" />
            </div>
            <div className=" inline-block w-12 mr-2 ">
                <img src="./images/orange.png" name='12' onClick={(e)=>click(e)} className={`${select===12&&props.items.b[5]===1?" shadow-2xl ":""} rounded-full cursor${props.items.b[5]===1?'-pointer hover:shadow-lg':'-not-allowed opacity-30'}`} alt="orange" />
            </div>
            
        </div>
    )
}

export default Orange;