import React from "react";

const Table =(props)=>{
    var num = 0;
    for(var i=0;i<6;i++){
        if(props.items.a[i]===0){
            num++;
        }
        if(props.items.b[i]===0){
            num++;
        }
    }

    console.log(num);
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
                    size="w-28 m-auto";
                    break;

                case 2:
                    size="w-24 m-auto";
                    break;

                case 3:
                    size="w-20 m-auto";
                    break;

                case 4:
                    size="w-16 m-auto";
                    break;

                case 5:
                    size="w-14 m-auto";
                    break;

                case 6:
                    size="w-12 m-auto";
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
                    size="w-24 m-auto";
                    break;

                case 3:
                    size="w-20 m-auto";
                    break;

                case 4:
                    size="w-16  m-auto";
                    break;

                case 5:
                    size="w-14 m-auto";
                    break;

                case 6:
                    size="w-12 m-auto";
                    break;
            }
            return (
                <img src="./images/orange.png" className={size} name={no} />
            )
        }
    }

    return(
        <div className="w-96 m-auto   my-4">
         

            <div className="block w-96  grid grid-cols-3 grid-rows-3">

                <button  className={`p-0 m-0 inline-block border-r-2 border-b-2 ${num%2===0?"border-blue-400":"border-orange-400"} w-32 h-32`} name="1" onClick={(e)=>click(e)}>
                    {images(1)}
               </button>

                <button className={`inline-block border-r-2 ${num%2===0?"border-blue-400":"border-orange-400"} border-b-2 border-l-2  w-32 h-32`} name="2" onClick={(e)=>click(e)}>
                    {images(2)}
                </button>
                <button className={`inline-block border-l-2 border-b-2 ${num%2===0?"border-blue-400":"border-orange-400"} w-32 h-32`}  name="3" onClick={(e)=>click(e)}>
                    {images(3)}
                </button>
                <button className={`inline-block border-r-2 border-b-2  border-t-2 ${num%2===0?"border-blue-400":"border-orange-400"} w-32 h-32`}  name="4" onClick={(e)=>click(e)}>
                    {images(4)}
                </button>
                <button className={`inline-block border-2 ${num%2===0?"border-blue-400":"border-orange-400"} w-32 h-32`}  name="5" onClick={(e)=>click(e)}>
                    {images(5)}
                </button>
                <button className={`inline-block border-l-2 border-b-2  border-t-2 ${num%2===0?"border-blue-400":"border-orange-400"} w-32 h-32`}  name="6" onClick={(e)=>click(e)}>
                    {images(6)}
                </button>
                <button className={` inline-block border-r-2 border-t-2 ${num%2===0?"border-blue-400":"border-orange-400"} w-32 h-32`}  name="7" onClick={(e)=>click(e)}>
                    {images(7)}
                </button>
                <button className={`inline-block border-r-2 ${num%2===0?"border-blue-400":"border-orange-400"} border-t-2 border-l-2  w-32 h-32`}  name="8" onClick={(e)=>click(e)}>
                    {images(8)}
                </button>
                <button className={`inline-block border-l-2 border-t-2 ${num%2===0?"border-blue-400":"border-orange-400"} w-32 h-32`} name="9" onClick={(e)=>click(e)}>
                    {images(9)}
                </button>
            </div>

            
        </div>
    )
}

export default Table;