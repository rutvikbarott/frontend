import React, { useState } from 'react'

function Clickbutton() {


    const[text,settext]=useState("Not clicked");

    const handleckick=()=>{
        settext("cliked")
    }
  return (
    <div>
      <p>{text}</p>
      <button onclick={handleckick}>Clik me</button>
    </div>
  )
}

export default Clickbutton
