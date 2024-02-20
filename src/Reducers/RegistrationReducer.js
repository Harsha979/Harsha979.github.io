const defaultState={
    username:"besant",
    password:"123",
    loggedIn:false,
}

function RegisterReducer(state=defaultState,action){
      switch (action.type){
        case "Register":
            return {...state,username:action.payload.username,password:action.payload.password,loggedIn:action.payload.loggedIn}
        default:
            return state;
      }

}

export default RegisterReducer;