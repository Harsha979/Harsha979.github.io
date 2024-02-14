const defaultState={
    a:"",
    b:""
}

const valuesReducer = (state=defaultState,action)=>{
  switch(action.type){
    case  "Values":
        return {...state,a:action.payload.a,b:action.payload.b};
    default:
        return state;
  }
   

}

export default valuesReducer;