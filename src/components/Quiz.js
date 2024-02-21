import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";


function Quiz(){

    const [course,setCourse]=useState("");
    const[city,setCity]=useState("");
    const[courseScore,setCourseScore]=useState(0);
    const[cityScore,setCityScore]=useState(0);

    useEffect(()=>{
        if(course === "Both"){
            setCourseScore(1)
        }
        if(city === "Chennai"){
            setCityScore(1)
        }
    },[course,city])

    const navigate=useNavigate();
    function checkScore(){
        if(course !== "" && city !== ""){
         alert("your score is "+(courseScore+cityScore))
         navigate("/")
        }else{
            alert("please answer all questions")
        }
    }

    const [value,setValue]=useState(0);
    const colors=["red","blue","green","white","orange"]

    useEffect(()=>{
        const interval=setInterval(()=>{
                setValue((v)=>{
                    return v===5 ? 0 : v+1;
                })
        },[6000])
        // return clearInterval(interval)
    },[])


    return(
        <div className="quiz" style={{backgroundColor:colors[value]}}>
            <div style={{fontSize:"25px"}}>
            <h1>Quiz</h1>
            <p>1.Which Courses Besant Technologies provide?</p>
            <input type="radio" checked={course === "Java"} onChange={()=>setCourse("Java")}></input>
            <label>Java</label>
            <input type="radio" checked={course === "ReactJs"} onChange={()=>setCourse("ReactJs")}></input>
            <label>ReactJs</label>
            <input type="radio" checked={course === "Both"} onChange={()=>setCourse("Both")}></input>
            <label>Both</label>
            <p>2.Besant Technologies exist in Which City?</p>
            <input type="radio" checked={city === "Delhi"} onChange={()=>setCity("Delhi")}></input>
            <label>Delhi</label>
            <input type="radio" checked={city === "Chennai"} onChange={()=>setCity("Chennai")}></input>
            <label>Chennai</label>
            <input type="radio" checked={city === "Patna"} onChange={()=>setCity("Patna")}></input>
            <label>Patna</label>
            <div>
            <button onClick={()=>checkScore()} className="submitButton">SUBMIT</button>
            </div>
            </div>
        </div>
    )

}

export default Quiz;