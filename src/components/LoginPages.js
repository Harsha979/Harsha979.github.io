import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LoginPages(){
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");


    function checkInputsNotEmpty(){
        if(userName !=""){
            if(password !=""){
                if(userName != selector.username || password !=selector.password){
                    alert("username or password mismatch")
                }
                else{
                    alert("login Sucess")
                    navigate("/homepage")
                }
            }
            else{
                alert("password field is required")
            }
        }
        else{
            alert("userName field is required")
        }
    }
    const navigate=useNavigate();
    const selector=useSelector((state)=>state.keytoAccess);
    return(
       <div style={{display:"grid"}}>
        <h1>Login Page</h1>

        <label>userName</label>
        <input type="text" required="true" value={userName} onChange={(e)=>{setUserName(e.target.value)}}></input>
        <label>password</label>
        <input type="password" required="true" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
        <button type="submit" onClick={()=>checkInputsNotEmpty()}>Login</button>
        <button onClick={()=>{navigate("/")}}>GO BACK</button>
        
       </div>
    );

}


export default LoginPages;

