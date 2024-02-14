const defaultState={
    username:"",
    password:"",
    mobileNuber:""
}

function RegisterReducer(state=defaultState,action){
      switch (action.type){
        case "Register":
            return {...state,username:action.payload.username,password:action.payload.password,mobileNumber:action.payload.mobileNumber}
        default:
            return state;
      }

}

export default RegisterReducer;