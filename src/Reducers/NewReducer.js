const defaultState={
    a:"1",
    b:"2"
}


function Values(state=defaultState,action){
        switch (action.type){
            case "Values":
                return {...state,a:action.payload.a,b:action.payload.b}
            default:
                return state;
        }

}

export default Values;

