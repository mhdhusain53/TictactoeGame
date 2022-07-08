import React, { useState } from "react";

const Blue =(props)=>{
    const [select,setSelected]=useState({});
    const click=(event)=>{
        props.setSelected(event.target.name);

        setSelected(parseInt(event.target.name))
    }


    return(
        <div className=" p-2  m-auto mt-2 flex justify-center items-center">


            <div className="inline-block w-28  mr-2"  >
                <img src="./images/blue.png" name='1' onClick={(e)=>click(e)} className={`${select===1&&props.items.a[0]===1?" shadow-2xl ":""} rounded-full ${props.items.a[0]===1?'cursor-pointer hover:shadow-lg ':'cursor-not-allowed opacity-30'}`} alt="blue" />
            </div>
            <div className=" inline-block w-24 mr-2 ">
                <img src="./images/blue.png" name='2' onClick={(e)=>click(e)} className={`${select===2&&props.items.a[1]===1?"shadow-2xl":""} rounded-full ${props.items.a[1]===1?'cursor-pointer hover:shadow-lg':'cursor-not-allowed opacity-30'}`} alt="blue" />
            </div>
            <div className="inline-block w-20  mr-2">
                <img src="./images/blue.png" name='3' onClick={(e)=>click(e)} className={`${select===3&&props.items.a[2]===1?"shadow-2xl":""} rounded-full ${props.items.a[2]===1?'cursor-pointer hover:shadow-lg':'cursor-not-allowed opacity-30'}`} alt="blue" />
            </div>
            <div className=" inline-block w-16  mr-2 ">
                <img src="./images/blue.png" name='4' onClick={(e)=>click(e)} className={` ${select===4&&props.items.a[3]===1?"shadow-2xl":""} rounded-full ${props.items.a[3]===1?'cursor-pointer hover:shadow-lg':'cursor-not-allowed opacity-30'}`} alt="blue" />
            </div>
            <div className="inline-block w-14 mr-2">
                <img src="./images/blue.png" name='5' onClick={(e)=>click(e)} className={`${select===5&&props.items.a[4]===1?"shadow-2xl":""} rounded-full ${props.items.a[4]===1?'cursor-pointer hover:shadow-lg':'cursor-not-allowed opacity-30'}`} alt="blue" />
            </div>
            <div className=" inline-block w-12 mr-2 ">
                <img src="./images/blue.png" name='6' onClick={(e)=>click(e)} className={`${select===6&&props.items.a[5]===1?"shadow-2xl":""} rounded-full ${props.items.a[5]===1?'cursor-pointer hover:shadow-lg':'cursor-not-allowed opacity-30'}`} alt="blue" />
            </div>
            
        </div>
    )
}

export default Blue;