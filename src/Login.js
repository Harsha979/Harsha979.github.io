import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormButton from "./components/formButton";
import HomePage from "./HomePage";
import { useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [defaultMobileNumber, setDefaultMobileNumber] = useState("");
  const [flag, setFlag] = useState(false);
  const changeUserName = (e) => {
    setUsername(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  }
  const changeNumber = (e) => {
    setDefaultMobileNumber(e.target.value);
  }
  function Check(){
    if(details.username === username){
      if(details.password === password){
        if(details.mobileNumber === defaultMobileNumber){
          alert("login Sucess")
        }else{
            alert("wrong number")
        }
      }
      else{
        alert("wrong password")
      }
    }
    else{
      alert("wrong UserName")
    }
  }
  
  const details=useSelector((state)=>state.RegisterReducer);
  

  return (
    <div style={{ display: "grid" }}>
   
    {flag==true?  <HomePage Name={username} />
    
    
    :  <>



      <label>Username</label>
      <input value={username} onChange={(e) => changeUserName(e)}></input>
      <label>Password</label>
      <input
        value={password}
        type="password"
        onChange={(e) => changePassword(e)}
      ></input>
       <label>MobileNumber</label>
      <input
        value={defaultMobileNumber}
        type="text"
        onChange={(e) => changeNumber(e)}
      ></input>
      <button
        label="login"
        onClick={() => {Check()}}
      />

      
</>}
      {/* <button onClick={()=>{navigate("/")}}>GO Back</button> */}
    </div>
  );
};

export default Login;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import FormButton from './components/formButton';
// import { useDispatch } from "react-redux";

// function RegisterPage() {
//   const navigate = useNavigate();
//   const [defaultUsername, setDefaultUsername] = useState("");
//   const [defaultMobileNumber, setDefaultMobileNumber] = useState("");
//   const [defaultPassword, setDefaultPassword] = useState(null);
//   const [defaultAddress, setDefaultAddress] = useState("");

//   //  const validateFields=()=>{
//   //     if(defaultUsername || defaultPassword || defaultMobileNumber || defaultAddress !== ""){
//   //         navigate('/login')
//   //     }
//   //     else{
//   //         alert("Please fill all the fields")
//   //     }
//   //   }

//   useEffect(() => {
//     defaultPassword !==null?
//     setDefaultUsername("React World!!"):console.log("Into Else")
//   }, []);

//   const dispatch=useDispatch();

//   function RegisterSuccess(){
//          dispatch({type:"Register",payload:{username:defaultUsername,password:defaultPassword,mobileNumber:defaultMobileNumber}});
//          navigate("/login")
//   }


//   return (
//     <div style={{ display: "grid" }}>
//       <h1>Register Page</h1>


//         <label>Username</label>
//         <input
//           required={true}
//           type="text"
//           value={defaultUsername}
//           onChange={(e) => {
//             setDefaultUsername(e.target.value);
//           }}
//         ></input>

//         <label>Password</label>
//         <input
//           required={true}
//           value={defaultPassword}
//           onChange={(e) => {
//             setDefaultPassword(e.target.value);
//           }}
//           type="password"
//         ></input>

//         <label>mobileNumber</label>
//         <input
//           required={true}
//           type="number"
//           value={defaultMobileNumber}
//           onChange={(e) => {
//             setDefaultMobileNumber(e.target.value);
//           }}
//         ></input>

//         <label>address</label>
//         <input
//           required={true}
//           value={defaultAddress}
//           onChange={(e) => {
//             setDefaultAddress(e.target.value);
//           }}
//           type="text"
//         ></input>
//         <button  onClick={()=>RegisterSuccess()}>Register</button>
//         <button  onClick={()=>navigate("/")}>GoBack</button>
      
//     </div>
//   );
// }

// export default RegisterPage;

