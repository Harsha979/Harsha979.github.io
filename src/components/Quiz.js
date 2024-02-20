import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Quiz(){

    const [course,setCourse]=useState("");
    const[city,setCity]=useState("");
    const[courseScore,setCourseScore]=useState(0);
    const[cityScore,setCityScore]=useState(0);

    useEffect(()=>{
        if(course === "Both"){
            setCourseScore(1)
        }
    },[course])

    useEffect(()=>{
        if(city === "Chennai"){
            setCityScore(1)
        }
    },[city])
    const navigate=useNavigate();
    function checkScore(){
         alert("your score is"+(courseScore+cityScore))
         navigate("/homepage")
    }

    return(
        <div>
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
            <button onClick={()=>checkScore()}>SUBMIT</button>
            </div>
        </div>
    )

}

export default Quiz;