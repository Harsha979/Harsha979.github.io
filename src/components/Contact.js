import React from "react";
import { FaLinkedin,FaInstagram,FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Contact.css";

function Contact(){

    return(
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
                    <p>Gmail</p>
                    <Link to="">
                    <IoMdCall></IoMdCall>
                    </Link>
                    <p>Phone(99999999999)</p>
                    <Link to="/homepage">Home</Link>
            </div>
        </div>
    )
}

export default Contact;