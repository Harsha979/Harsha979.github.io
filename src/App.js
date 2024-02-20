import React from "react";
import { useNavigate } from "react-router-dom";


function App(){


  const navigate=useNavigate();
  
  return(
    <div style={{display:"grid"}}>
      <h1>Welcome</h1>
      <button type="submit" onClick={()=>{navigate("/login")}}>SIGN IN</button>
      <button type="submit" onClick={()=>{navigate("/register")}}>SIGN UP</button>
    </div>
  )

}

export default App;