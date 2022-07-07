import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import Blue from "./Blue";
import Orange from "./Orange";
import Table from "./Table";
import Winner from "./Winner";

const App = ()=>{

    var [state,setState]=useState({'t':[0,0,0,0,0,0,0,0,0],'a':[1,1,1,1,1,1],'b':[1,1,1,1,1,1]});
    var sizeSelected=0;

    const setSelected=(event)=>{
        if(event<7){
            if(state.a[event-1]===1){
                sizeSelected=parseInt(event);
            }
        }else{
            if(state.b[event-7]===1){
                sizeSelected=parseInt(event);
            }
        }
    }

    const restart = ()=>{
        setState({'t':[0,0,0,0,0,0,0,0,0],'a':[1,1,1,1,1,1],'b':[1,1,1,1,1,1]});
    }
    var no;
    const setGame=(event)=>{
        const tableno=parseInt(event)-1;

        var tt=state.t;
        var aa=state.a;
        var bb=state.b;
        no=0;
        for(var i=0;i<6;i++){
            if(aa[i]===0){
                no++;
            }
            if(bb[i]===0){
                no++;
            }
        }


        if(sizeSelected===0){
            // alert('First select circle.');
            

        }else if(sizeSelected<7&&(no%2===0)){
            if((tt[tableno]>sizeSelected && tt[tableno]<7)||(tt[tableno]>6 && (tt[tableno])>sizeSelected+6 ) || tt[tableno]===0){
                tt[tableno]=sizeSelected;
                aa[sizeSelected-1]=0;

                setState({'t':tt,'a':aa,'b':bb});
                sizeSelected=0;
            }
            
            
        }else if (no%2===1&&sizeSelected>6){
            if((tt[tableno]>sizeSelected && tt[tableno]>6)||(tt[tableno]<7 && (tt[tableno]+6)>sizeSelected) || tt[tableno]===0){
                tt[tableno]=sizeSelected;
                bb[sizeSelected-7]=0;

                setState({'t':tt,'a':aa,'b':bb});
                sizeSelected=0;
            }
        }
    }


    const checkGame=()=>{
        var t= state.t;
        if( (t[0]<7&&t[1]<7&&t[2]<7&&t[0]!==0&&t[1]!==0&t[2]!==0) || 
            (t[3]<7&&t[4]<7&&t[5]<7&&t[3]!==0&&t[4]!==0&t[5]!==0) ||
            (t[6]<7&&t[7]<7&&t[8]<7&&t[8]!==0&&t[6]!==0&t[7]!==0) ||
            (t[0]<7&&t[3]<7&&t[6]<7&&t[0]!==0&&t[3]!==0&t[6]!==0) ||
            (t[1]<7&&t[4]<7&&t[7]<7&&t[1]!==0&&t[4]!==0&t[7]!==0) ||
            (t[2]<7&&t[5]<7&&t[8]<7&&t[2]!==0&&t[5]!==0&t[8]!==0) ||
            (t[0]<7&&t[4]<7&&t[8]<7&&t[0]!==0&&t[4]!==0&t[7]!==0) ||
            (t[2]<7&&t[4]<7&&t[6]<7&&t[2]!==0&&t[4]!==0&t[6]!==0)
        ){
            return 1;
        }else if( 
            (t[0]>6&&t[1]>6&&t[2]>6&&t[0]!==0&&t[1]!==0&t[2]!==0) || 
            (t[3]>6&&t[4]>6&&t[5]>6&&t[3]!==0&&t[4]!==0&t[5]!==0) ||
            (t[6]>6&&t[7]>6&&t[8]>6&&t[8]!==0&&t[6]!==0&t[7]!==0) ||
            (t[0]>6&&t[3]>6&&t[6]>6&&t[0]!==0&&t[3]!==0&t[6]!==0) ||
            (t[1]>6&&t[4]>6&&t[7]>6&&t[1]!==0&&t[4]!==0&t[7]!==0) ||
            (t[2]>6&&t[5]>6&&t[8]>6&&t[2]!==0&&t[5]!==0&t[8]!==0) ||
            (t[0]>6&&t[4]>6&&t[8]>6&&t[0]!==0&&t[4]!==0&t[7]!==0) ||
            (t[2]>6&&t[4]>6&&t[6]>6&&t[2]!==0&&t[4]!==0&t[6]!==0)
        ){
            return 2;
        }else{

            return 0;
        }
    }

    const showGame=()=>{
        if(checkGame()===0){
            return (
                <div className="">
                    <Blue items={state} setSelected={setSelected}/>
                    <hr className=""/>
                    <Table items={state} setGame={setGame}/>
                    <hr />
                    <Orange items={state} setSelected={setSelected} />
                </div>
            )
        }else{
            return (            
                <Winner winner={checkGame()} restart={restart}/>
            )
        }
    }

    return (
        <div className="">{showGame()}</div>
    );
}

export default App;