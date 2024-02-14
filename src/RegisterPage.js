import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormButton from './components/formButton';
import { useDispatch } from "react-redux";

function RegisterPage() {
  const navigate = useNavigate();
  const [defaultUsername, setDefaultUsername] = useState("");
  const [defaultMobileNumber, setDefaultMobileNumber] = useState("");
  const [defaultPassword, setDefaultPassword] = useState(null);
  const [defaultAddress, setDefaultAddress] = useState("");

  //  const validateFields=()=>{
  //     if(defaultUsername || defaultPassword || defaultMobileNumber || defaultAddress !== ""){
  //         navigate('/login')
  //     }
  //     else{
  //         alert("Please fill all the fields")
  //     }
  //   }

  useEffect(() => {
    defaultPassword !==null?
    setDefaultUsername("React World!!"):console.log("Into Else")
  }, []);

  const dispatch=useDispatch();

  function RegisterSuccess(){
         dispatch({type:"Register",payload:{username:defaultUsername,password:defaultPassword,mobileNumber:defaultMobileNumber}});
         navigate("/login")
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value)
    }

  return (
    <div style={{ display: "grid" }}>
      <h1>Register Page</h1>

<form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          required={true}
          type="text"
          value={defaultUsername}
          onChange={(e) => {
            setDefaultUsername(e.target.value);
          }}
        ></input>

        <label>Password</label>
        <input
          required={true}
          value={defaultPassword}
          onChange={(e) => {
            setDefaultPassword(e.target.value);
          }}
          type="password"
        ></input>

        <label>mobileNumber</label>
        <input
          required={true}
          type="text"
          maxLength={10}
          value={defaultMobileNumber}
          onChange={(e) => {
            setDefaultMobileNumber(e.target.value);
          }}
        ></input>

        <label>address</label>
        <input
          required={true}
          value={defaultAddress}
          onChange={(e) => {
            setDefaultAddress(e.target.value);
          }}
          type="text"
        ></input>
        <button type="submit">submit</button>
        {/* <button  onClick={()=>RegisterSuccess()}>Register</button>
        <button  onClick={()=>navigate("/")}>GoBack</button> */}
      </form>
    </div>
  );
}

export default RegisterPage;
