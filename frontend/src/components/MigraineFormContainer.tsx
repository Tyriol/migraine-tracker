import { useState } from "react";
import { formDataType } from "../types/types";
import MigraineFormPresenter from "./MigraineFormPresenter";

const MigraineFormContainer = () => {

    const [formData, setFormData] = useState<formDataType>({
        date: null,
        time: "",
        intensity: "",
        symptoms: "",
        triggers: "",
        medication: ""
    })

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
      }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    }
    
    return (
        <MigraineFormPresenter onSubmit={handleFormSubmit} onChange={handleChange} />
    );
};

export default MigraineFormContainer;