

function InputField(props){
    return(
        <div className='input-group' >
            <input className='h-100' id={props.field_id} type={props.type} required />
            <label for={props.field_id} >{props.field_name}</label>
        </div>
    )
}

export default InputField