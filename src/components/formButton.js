const FormButton=(props)=>{
    return (
        <button 
        onClick={props.onClick}
        >{props.label}</button>
       
    )
}
export default FormButton;