import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";

interface MovesDisplay {
    moves: string[]|undefined,
}


export default function MovesDisplay ({moves}:MovesDisplay){

   const [mossa,setMossa]=useState<string|undefined>("Tuono")
   const [counter,setCounter]=useState<number>(0)

  useEffect(()=>{

if(counter>0){
    mossa ==="Tuono" && setCounter( counter + 1);
}
else{
    mossa ==="Tuono" && setCounter( counter + 2);
}


  }, [mossa])

   useEffect(()=>{counter===3 && console.log("3")},[counter])

    return (
        <div>
            <p>{mossa}</p>
            <p>{counter}</p>
            {moves?.map((el,i)=>{
             return <React.Fragment key={i}>
                <p >{el}</p>
                 <Button size="sm" onClick={()=>setMossa(el)  }>Display Mossa</Button>
                </React.Fragment>
            })}
        </div>
    )
}
