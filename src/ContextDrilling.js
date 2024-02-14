import { useState } from 'react';

const Component1=()=>{

    const [name,setName] =useState("MUI")
    return(
        <>
        <br />
        This is Component1
        <Component2 name={name}  setName={setName}/>
        </>
    )
}

const Component2=({name,setName})=>{
    return(
        <>
        <br />
        This is Component2 with {name}
        {/* <Component3 name={name} setName={setName}/> */}
        <Component4 />
        </>
    )
}

const Component3=({name,setName})=>{
    return(
        <>
        <br />
        This is Component3
        <Component4  name={name} setName={setName}/>
        </>
    )
}

const Component4=({name,setName})=>{
    return(
        <>
        <br />
        This is Component4
        <Component5 name={name} setName={setName}/>
        </>
    )
}

const Component5=({name,setName})=>{
    return(
        <>
        <br />
        This is Component5 {name}
        <button onClick={()=>setName("React World")}>Trigger</button>
        </>
    )
}
export default Component1;