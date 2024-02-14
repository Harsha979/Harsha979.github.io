import React, { useEffect, useMemo, useRef, useState } from "react";
import "./homepage.css";
import { useDispatch, useSelector } from "react-redux";
import { IoMdRefresh } from "react-icons/io";
import { TfiDownload } from "react-icons/tfi";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function HomePageBesant (){
    
    var fruits=["TrainerDetails","TraineeDetails","About","Contact","Courses"];

    const count=useRef();

    function setCount(){
        count.current=count.current+1;
        console.log(count.current)
    }

    



    const values=useSelector((state)=>state.keytoAccess);
    const navigate =useNavigate();

    function logout(){

       navigate("/login")
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
    function showConsole(){
        setCount1(num);
    }

    return(
        <div >
            {/* <input type="number" onChange={(e)=>setNum(e.target.value)}></input>
            <button onClick={()=>showConsole()}>Calculate</button>
            <input type="text" ref={count} value={calculatedValue}></input>
            <button onClick={()=>count.current.focus()}>focus</button> */}
        <input type="radio" checked={value == "male"} onChange={()=>{setValue("male")}}></input>
         <label>Male</label>
         <input type="radio" checked={value == "female"} onChange={()=>{setValue("female")}}></input>
         <label>Female</label>
         <input type="radio" checked={value == "other"} onClick={()=>{setValue("other")}}></input>
         <label>Other</label>
         <h1>Welcome to Besant Technologies  {values.username} *logout{<FiLogOut onClick={()=>{logout()}}></FiLogOut>}</h1>
        <div style={{display:"inline-flex",placeContent:"center",margin:"10% 10% 0% 0"}}>
           {fruits.map((elements,index)=>{
               return (
                <div onClick={()=>navigate("/trainer")}  className={"homepage"}>
                    {elements}
                </div>
               )
           })}
        </div>
        </div>
    )
}

export default HomePageBesant;