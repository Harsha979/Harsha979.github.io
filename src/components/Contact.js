import React from "react";
import { FaLinkedin,FaInstagram,FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Contact.css";
import Navbar from "./NavBar";

function Contact(){

    return(
        <div>
            <Navbar/>
        <div className="contactMainDiv">
        <div className="contactContainer">
            <div className="contactDiv">
                <h1>Contact Through Below Options</h1>
                    <Link to="https://www.linkedin.com/company/besant-technologies/">
                    <FaLinkedin></FaLinkedin>
                    </Link>
                    <p>Linkedin</p>
                    <Link to="https://www.instagram.com/besant_technologies?igsh=YzljYTk1ODg3Zg==">
                    <FaInstagram></FaInstagram>
                    </Link>
                    <p>Instagram</p>
                    <Link to="https://www.instagram.com/besant_technologies?igsh=YzljYTk1ODg3Zg==">
                    <FaFacebook></FaFacebook>
                    </Link>
                    <p>Facebook</p>
                    <Link to="">
                    <SiGmail></SiGmail>
                    </Link>
                    <p>besanttechnologies@gmail.com</p>
                    <Link to="">
                    <IoMdCall></IoMdCall>
                    </Link>
                    <p>+91 8099770770</p>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Contact;