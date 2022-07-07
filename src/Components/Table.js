import React from "react";

const Table =(props)=>{

    const click=(event)=>{
        props.setGame(event.target.name);
    }

    const images=(no)=>{
        var t=props.items.t[no-1];
        if(t===0){
            return ;

        }else if(t<7){
            var size;
            switch(t){
                case 1:
                    size="w-28";
                    break;

                case 2:
                    size="w-24";
                    break;

                case 3:
                    size="w-20";
                    break;

                case 4:
                    size="w-16";
                    break;

                case 5:
                    size="w-14";
                    break;

                case 6:
                    size="w-12";
                    break;
            }

            return (
                <img src="./images/blue.png" className={size} name={no} />
            )
        }
        else if(t<13){

            var size;
            switch(t-6){
                case 1:
                    size="w-28 m-auto";
                    break;

                case 2:
                    size="w-24";
                    break;

                case 3:
                    size="w-20";
                    break;

                case 4:
                    size="w-16 ";
                    break;

                case 5:
                    size="w-14";
                    break;

                case 6:
                    size="w-12";
                    break;
            }
            return (
                <img src="./images/orange.png" className={size} name={no} />
            )
        }
    }

    return(
        <div className="w-96 m-auto  my-4">
         

            <div className="block ">

                <button  className=" inline-block border-r-2 border-b-2 border-black w-32 h-32" name="1" onClick={(e)=>click(e)}>
                    {images(1)}
               </button>

                <button className="inline-block border-r-2 border-black border-b-2 border-l-2  w-32 h-32" name="2" onClick={(e)=>click(e)}>
                    {images(2)}
                </button>
                <button className="inline-block border-l-2 border-b-2 border-black w-32 h-32"  name="3" onClick={(e)=>click(e)}>
                    {images(3)}
                </button>
            </div>

            <div className="block">
                <button className=" inline-block border-r-2 border-b-2  border-t-2 border-black w-32 h-32"  name="4" onClick={(e)=>click(e)}>
                    {images(4)}
                </button>
                <button className="inline-block border-2 border-black w-32 h-32"  name="5" onClick={(e)=>click(e)}>
                    {images(5)}
                </button>
                <button className="inline-block border-l-2 border-b-2  border-t-2 border-black w-32 h-32"  name="6" onClick={(e)=>click(e)}>
                    {images(6)}
                </button>
            </div>

            <div className="block">
                <button className=" inline-block border-r-2 border-t-2 border-black w-32 h-32"  name="7" onClick={(e)=>click(e)}>
                    {images(7)}
                </button>
                <button className="inline-block border-r-2 border-black border-t-2 border-l-2  w-32 h-32"  name="8" onClick={(e)=>click(e)}>
                    {images(8)}
                </button>
                <button className="inline-block border-l-2 border-t-2 border-black w-32 h-32" name="9" onClick={(e)=>click(e)}>
                    {images(9)}
                </button>
            </div>

            
        </div>
    )
}

export default Table;