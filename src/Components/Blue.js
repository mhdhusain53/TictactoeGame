import React from "react";

const Blue =(props)=>{

    const click=(event)=>{
        props.setSelected(event.target.name);
    }


    return(
        <div className="border-2 p-2 bg-gray-200 m-auto mt-2 flex justify-center items-center">


            <div className="inline-block w-28  mr-2"  >
                <img src="./images/blue.png" name='1' onClick={(e)=>click(e)} className={`cursor${props.items.a[0]===1?'-pointer':'-not-allowed opacity-30'}`} alt="blue" />
            </div>
            <div className=" inline-block w-24 mr-2 ">
                <img src="./images/blue.png" name='2' onClick={(e)=>click(e)} className={`cursor${props.items.a[1]===1?'-pointer':'-not-allowed opacity-30'}`} alt="blue" />
            </div>
            <div className="inline-block w-20  mr-2">
                <img src="./images/blue.png" name='3' onClick={(e)=>click(e)} className={`cursor${props.items.a[2]===1?'-pointer':'-not-allowed opacity-30'}`} alt="blue" />
            </div>
            <div className=" inline-block w-16  mr-2 ">
                <img src="./images/blue.png" name='4' onClick={(e)=>click(e)} className={`cursor${props.items.a[3]===1?'-pointer':'-not-allowed opacity-30'}`} alt="blue" />
            </div>
            <div className="inline-block w-14 mr-2">
                <img src="./images/blue.png" name='5' onClick={(e)=>click(e)} className={`cursor${props.items.a[4]===1?'-pointer':'-not-allowed opacity-30'}`} alt="blue" />
            </div>
            <div className=" inline-block w-12 mr-2 ">
                <img src="./images/blue.png" name='6' onClick={(e)=>click(e)} className={`cursor${props.items.a[5]===1?'-pointer':'-not-allowed opacity-30'}`} alt="blue" />
            </div>
            
        </div>
    )
}

export default Blue;