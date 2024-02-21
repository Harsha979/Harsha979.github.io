import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import "./Registration.css";
import img from './besant.jpeg';

function LoginPages(){
    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");


    function checkInputsNotEmpty(){
        if(userName !==""){
            if(password !==""){
                if(userName !== selector.username || password !==selector.password){
                    alert("username or password mismatch")
                }
                else{
                    dispatch({type:"Register",payload:{username:selector.username,password:selector.password,loggedIn:true}})
                    alert("login Sucess")
                    navigate("/")
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
    const dispatch=useDispatch();
    const selector=useSelector((state)=>state.keytoAccess);
    return(
    <div className="loginDiv">
       <div className="loginContainer">
        <h1>Login Page</h1>
        <label>userName</label>
        <input type="text" required="true" value={userName} onChange={(e)=>{setUserName(e.target.value)}}></input>
        <label>password</label>
        <input type="password" required="true" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
        <button className="loginButton" type="submit" onClick={()=>checkInputsNotEmpty()}>Login</button>
        <button className="gobackButton" onClick={()=>{navigate("/")}}>GO BACK</button>
       </div>
       <div className="paragraphDiv">
            <p className="paragraph">
            Besant Technologies Offering Online & Classroom Training Courses on AWS, Python, Data Science, Devops, Selenium, ML, AI, RPA, Azure, Digital Marketing, Full Stack Developer, Tableau, Java, Angular, Power BI etc. Best Software Training Institute in Chennai.
            </p>
            <img alt="basicimage" src={img}></img>
        </div>
       </div>
    );

}


export default LoginPages;

