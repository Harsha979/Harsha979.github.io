import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import img from './besant.jpeg';
import Navbar from "./NavBar";

function About(){

    return(
        <div>
            <Navbar/>
        <div className="contactMainDiv">
        <div className="contactContainer">
            <div className="contactDiv">
                <h1>About Besant Technologies</h1>
                <p className="paragraph">
            Besant Technologies Offering Online & Classroom Training Courses on AWS, Python, Data Science, Devops, Selenium, ML, AI, RPA, Azure, Digital Marketing, Full Stack Developer, Tableau, Java, Angular, Power BI etc. Best Software Training Institute in Chennai.
            </p>
            <img alt="basicimage" src={img}></img>
            </div>
        </div>
        </div>
        </div>
    )
}

export default About;