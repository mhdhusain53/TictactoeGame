import React from "react";

const Orange =(props)=>{

    const click=(event)=>{
        props.setSelected(event.target.name);
    }


    return(
        <div className="border-2 p-2 bg-gray-200 m-auto mt-2 flex justify-center items-center">


            <div className="inline-block w-28  mr-2"  >
                <img src="./images/orange.png" name='7' onClick={(e)=>click(e)} className={`cursor${props.items.b[0]===1?'-pointer':'-not-allowed opacity-30'}`} alt="orange" />
            </div>
            <div className=" inline-block w-24 mr-2 ">
                <img src="./images/orange.png" name='8' onClick={(e)=>click(e)} className={`cursor${props.items.b[1]===1?'-pointer':'-not-allowed opacity-30'}`} alt="orange" />
            </div>
            <div className="inline-block w-20  mr-2">
                <img src="./images/orange.png" name='9' onClick={(e)=>click(e)} className={`cursor${props.items.b[2]===1?'-pointer':'-not-allowed opacity-30'}`} alt="orange" />
            </div>
            <div className=" inline-block w-16  mr-2 ">
                <img src="./images/orange.png" name='10' onClick={(e)=>click(e)} className={`cursor${props.items.b[3]===1?'-pointer':'-not-allowed opacity-30'}`} alt="orange" />
            </div>
            <div className="inline-block w-14 mr-2">
                <img src="./images/orange.png" name='11' onClick={(e)=>click(e)} className={`cursor${props.items.b[4]===1?'-pointer':'-not-allowed opacity-30'}`} alt="orange" />
            </div>
            <div className=" inline-block w-12 mr-2 ">
                <img src="./images/orange.png" name='12' onClick={(e)=>click(e)} className={`cursor${props.items.b[5]===1?'-pointer':'-not-allowed opacity-30'}`} alt="orange" />
            </div>
            
        </div>
    )
}

export default Orange;