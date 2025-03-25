import React, { useEffect } from 'react'
import 
export default function CountDownLightSwitch() {

const [toggel , setToggel]=("");

useEffect(()=>{




},[toggel])
  return (
    <div>
      <button id='toggel' className='toggel' value={toggel} onChange={(e)=> setToggel(e.target.value)} >
      Toggel
      </button>
    </div>
  )
}
