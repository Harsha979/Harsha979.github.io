import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Registration(){
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [mobileNumber,setMobileNumber]=useState("");
    const [address,setAddress]=useState("");
    const dispact=useDispatch();
    var gender={"1":"male",
                "2":"female",
                "3":"other"};

    function checkInputsNotEmpty(){
        if(userName !=""){
            if(password !=""){
                if(mobileNumber !=""){
                    if(address !=""){
                        dispact({type:"Register",payload:{username:userName,password:password}})
                        alert("Registration Sucess")
                        navigate("/login")
                    }
                    else{
                        alert("Address field is required")
                    }  
                }else{
                    alert("mobile number field is required")
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
    return(
       <div style={{display:"grid"}}>
        <h1>Registration Page</h1>
    
        <label>userName</label>
        <input type="text" required="true" value={userName} onChange={(e)=>{setUserName(e.target.value)}}></input>
        <label>password</label>
        <input type="password" required="true" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
        <label>mobileNumber</label>
        <input type="text" required="true" value={mobileNumber} onChange={(e)=>{setMobileNumber(e.target.value)}}></input>
        <label>address</label>
        <input type="text" required="true" value={address} onChange={(e)=>{setAddress(e.target.value)}}></input>
        <label>gender</label>
        <select onChange={(e)=>{console.log(e.target.value)}}>
           {Object.values(gender).map((elements,index)=>{
                return <option>{elements}</option>
           })}
        </select>

        <button type="submit" onClick={()=>checkInputsNotEmpty()}>Register</button>
        
       </div>
    );

}


export default Registration;

