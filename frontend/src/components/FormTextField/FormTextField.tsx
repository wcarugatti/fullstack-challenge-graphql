import { CustomTextField } from "./styles";

interface IProps {
  formik: any;
  inputId: string;
  placeholder: string;
}

const FormTextField: React.FC<IProps> = ({ formik, inputId, placeholder }) => {
  return (
    <CustomTextField
      id={inputId}
      name={inputId}
      value={formik.values[inputId]}
      onChange={formik.handleChange}
      error={formik.touched[inputId] && Boolean(formik.errors[inputId])}
      helperText={formik.touched[inputId] && formik.errors[inputId]}
      placeholder={placeholder}
    />
  );
};

export default FormTextField;
