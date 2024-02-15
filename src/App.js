import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import valuesReducer from './Reducers/valuesReducer';
import RegisterPage from "./RegisterPage";
import Registration from "./components/Registration";
import LoginPages from "./components/LoginPages";

function App(){


//reducer code
  // const dispatch=useDispatch();
  // const a=useSelector((state)=>state?.valuesReducer);
  // useEffect(()=>{
  //    console.log("values of a",a);
  // },[a])

  const navigate=useNavigate();
  
  return(
    <div style={{display:"grid"}}>
      {/* <h1>Welcome to Besant Technologies</h1> */}
      <button type="submit" onClick={()=>{navigate("/login")}}>SIGN IN</button>
      <button type="submit" onClick={()=>{navigate("/register")}}>SIGN UP</button>
      {/* <h1>Welcome to </h1> */}
      {/* reducer dispatch button */}
       {/* <button onClick={()=>{dispatch({type:"Values",payload:{a:"12",b:"13"}})}}>dispatch</button> */}
      {/* <button onClick={()=>{navigate("/login")}}>Login</button> 
      <button onClick={()=>{navigate("/register")}}>Register</button> */}
    </div>
  )

}

export default App;