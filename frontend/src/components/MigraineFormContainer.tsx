import MigraineFormPresenter from "./MigraineFormPresenter";

const MigraineFormContainer = () => {

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Submitted");
      }
    
    return (
        <MigraineFormPresenter onSubmit={handleFormSubmit} />
    );
};

export default MigraineFormContainer;