import React from "react";

class Trainerdetails extends React.Component {

    constructor(){
        super();
        this.state={value:"trainer details",color:"red"}
    }
    setValue = (e)=>{
        this.setState({value:e.target.value})
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({color:"black"})
        },3000)
       console.log("mounted"); 
    }

    componentDidUpdate(){
          console.log("updated");
    }

    render(){
        return(
            <div>
              {/* <input type="text" onChange={(e)=>this.setValue(e)}></input> */}
                <h1 style={{color:this.state.color}}>{this.state.value}</h1>
                {this.state.value==="trainer details" ?<ChildTrainerClass />:<div/>}
                <table style={{border:"1px solid black"}}>
                    <tr>
                        <th>name</th>
                        <th>role</th>
                        <th>contact</th>
                    </tr>
                    <tr>
                        <td>harsha</td>
                        <td>react</td>
                        <td>999999999999</td>
                    </tr>
                    <tr>
                        <td>harsha</td>
                        <td>react</td>
                        <td>999999999999</td>
                    </tr>
                    <tr>
                        <td>harsha</td>
                        <td>react</td>
                        <td>999999999999</td>
                    </tr>
                    <tr>
                        <td>harsha</td>
                        <td>react</td>
                        <td>999999999999</td>
                    </tr>
                </table>
            </div>
        );
    }

}

class ChildTrainerClass extends React.Component{

    componentWillUnmount(){
        alert("componet is unmounting")
    }

    render(){
        return(
            <div>
                <h1>child trainer class</h1>
            </div>
        )
    }
}

export default Trainerdetails;