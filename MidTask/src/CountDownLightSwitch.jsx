import React, {useState, useEffect } from 'react'

 function CountDownLightSwitch() {

const [toggel , setToggel]=useState("");

useEffect(()=>{
    
    if(toggel==true){
        console.log("White")
    }else{
        console.log("black")
        }
        toggel=true
    },[toggel])

   
  return (
    <div>
      <button id='toggel' className='toggel' value={toggel} onChange={(e)=> setToggel(e.target.value)} >
      Toggel
      </button>
    </div>
  )
}
export default CountDownLightSwitch;
