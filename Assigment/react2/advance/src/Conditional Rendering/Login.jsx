
  
import React, { useState } from 'react'

function Login() {
  const[add,remove]=useState();
    const toggedin=()=>{
        remove(!add)
    }
  return (
    <div>
      <div>
    <h1>Welcome to the App!</h1>
    <div>
      {add ? (
        <button onClick={toggedin}>Logout</button>
      ) : (
        <button onClick={toggedin}>Login</button>
      )}
    </div>
  </div>

    </div>
  )
}

export default Login
