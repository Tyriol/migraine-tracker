import Form from "./Form/Form";
import FormInput from "./Form/FormInput/FormInput";

interface MigraineFormPresenterProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const MigraineFormPresenter = ({onSubmit}: MigraineFormPresenterProps) => {
    return (
        <div className="add-data-point">
          <h2>Add info about your migraine</h2>
          <Form onSubmit={onSubmit}>
            <div className="date-time">
              <FormInput 
                label="Date"
                name="date"
                type="date"
                defaultValue={new Date().toISOString().split('T')[0]}
                />
                <FormInput label='Time' name='time' type='time' />
            </div>
              <FormInput label="Intensity" type="range" name="intensity" min="1" max="10" />
              <FormInput label='Preceding Symptoms' name="symptoms" type="textarea" rows={3} />
              <FormInput label='Triggers' name="triggers" type="textarea" rows={3} />
              <FormInput label='Medication' name="medication" type="textarea" rows={3} />
          </Form>
        </div>
    );
};

export default MigraineFormPresenter;