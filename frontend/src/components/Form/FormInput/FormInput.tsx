interface FormInputProps {
    label: string,
    name: string,
    type: string
}

const FormInput = ({label, name, type, ...props}: FormInputProps) => {
    return (
        <div className="form-input">
            <label htmlFor={name}>{label}</label>
            {type === "textarea" ? (
                <textarea name={name} {...props}></textarea>
            ) : (
                <input type={type} name={name} {...props}></input>
            )}
        </div>
    )
}

export default FormInput;