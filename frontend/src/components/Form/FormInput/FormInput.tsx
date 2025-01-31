interface FormInputProps {
    label: string,
    name: string,
    type: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    [key: string]: any
}

const FormInput = ({label, name, type, onChange,  ...props}: FormInputProps) => {
    return (
        <div className="form-input">
            <label htmlFor={name}>{label}</label>
            {type === "textarea" ? (
                <textarea name={name} onChange={onChange} {...props}></textarea>
            ) : (
                <input type={type} name={name} onChange={onChange} {...props}></input>
            )}
        </div>
    )
}

export default FormInput;