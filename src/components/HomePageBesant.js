import React, { useEffect, useMemo, useRef, useState } from "react";
import "./homepage.css";
import { useDispatch, useSelector } from "react-redux";
import { IoMdRefresh } from "react-icons/io";
import { TfiDownload } from "react-icons/tfi";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import img from './besant.jpeg';
import Navbar from "./NavBar";


function HomePageBesant (){    
 
    const count=useRef();

    function setCount(){
        count.current=count.current+1;
        console.log(count.current)
    }

    const navigate =useNavigate();

    function logout(){

        dispatch({type:"Register",payload:{loggedIn:false}})
                      
    }
    
    const [value,setValue]=useState("male");

    const[num,setNum]=useState(0);

    const [count1,setCount1]=useState(0);

    const calculatedValue=useMemo(()=>calculation(num),[count1]);

    function calculation(num){
     console.log("called");
        for(let i=0;i<10;i++){
            num=num+1;
        }
        return num;
    }

    const dispatch=useDispatch();

    var courses=["react","angular","html","css","javascript","java..etc"]


    return(
        <div className="homepageDiv">
           <Navbar/>
            <div className="blogDiv">
                <h1>Besant Technologies</h1>
            </div>
            <div className="coursesDiv">
                <div className="homeContainer">
            <img style={{width:"100%",height:"100%"}} src={img} alt="BASIC"></img>
                </div>
                <div className="homeContainer">
                <p className="paragraph">
            Besant Technologies Offering Online & Classroom Training Courses on AWS, Python, Data Science, Devops, Selenium, ML, AI, RPA, Azure, Digital Marketing, Full Stack Developer, Tableau, Java, Angular, Power BI etc. Best Software Training Institute in Chennai.
            </p>
                </div>
                <div className="homeContainer">
                        <h2>Avilable Courses</h2>
                        {courses.map((e,i)=>{
                            return <h4>{e}</h4>
                        })}
                </div>
            </div>
        </div>

        // // <div >
        //     {/* <input type="number" onChange={(e)=>setNum(e.target.value)}></input>
        //     <button onClick={()=>showConsole()}>Calculate</button>
        //     <input type="text" ref={count} value={calculatedValue}></input>
        //     <button onClick={()=>count.current.focus()}>focus</button> */}
        // {/* <input type="radio" checked={value == "male"} onChange={()=>{setValue("male")}}></input>
        //  <label>Male</label>
        //  <input type="radio" checked={value == "female"} onChange={()=>{setValue("female")}}></input>
        //  <label>Female</label>
        //  <input type="radio" checked={value == "other"} onClick={()=>{setValue("other")}}></input>
        //  <label>Other</label>
        //  <h1>Welcome to Besant Technologies  {values.username} *logout{<FiLogOut onClick={()=>{logout()}}></FiLogOut>}</h1>
        // <div style={{display:"inline-flex",placeContent:"center",margin:"10% 10% 0% 0"}}>
        //    {fruits.map((elements,index)=>{
        //        return (
        //         <div onClick={()=>navigate("/trainer")}  className={"homepage"}>
        //             {elements}
        //         </div>
        //        )
        //    })}
        // </div>
        // </div> */}
    )
}

export default HomePageBesant;