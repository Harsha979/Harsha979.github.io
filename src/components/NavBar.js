import React from "react";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar(){
    const values=useSelector((state)=>state.keytoAccess);
    const dispatch=useDispatch();
    function logout(){

        dispatch({type:"Register",payload:{loggedIn:false}})
                      
    }
    return(
        <div className="linksDiv">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/contact">Contact</Link>
        <Link className="link" to="/quiz">Quiz</Link>
    {values.loggedIn ? <div><h4>Hi {values.username}</h4>
    <FiLogOut style={{cursor:"pointer", width:"30%",height:"20%"}}
    onClick={()=>logout()}
    ></FiLogOut>
    </div> : 
        <Link className="link" to="/register">SignUp</Link>
    }
    </div>
    )
}

export default Navbar;