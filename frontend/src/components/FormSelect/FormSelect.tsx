import { FormControl, FormHelperText, MenuItem } from "@mui/material";
import { CustomSelect } from "./styles";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";

interface IProps {
  formik: any;
  options: Object[] | undefined;
  inputId: string;
  keyParameter: string;
  placeholder: string;
  optionDisplay: (option: any) => string;
}

const FormSelect: React.FC<IProps> = ({
  formik,
  options,
  inputId,
  keyParameter,
  placeholder,
  optionDisplay,
}) => {
  return (
    <FormControl
      fullWidth
      error={formik.touched[inputId] && Boolean(formik.errors[inputId])}
    >
      <CustomSelect
        id={inputId}
        name={inputId}
        displayEmpty
        IconComponent={() => <KeyboardArrowDownOutlined />}
        value={formik.values[inputId]}
        onChange={formik.handleChange}
      >
        <MenuItem value="">
          <span style={{ color: "#a2a2a2" }}>{placeholder}</span>
        </MenuItem>
        {options?.map((option: any) => (
          <MenuItem key={option[keyParameter]} value={option[keyParameter]}>
            {optionDisplay(option)}
          </MenuItem>
        ))}
      </CustomSelect>
      <FormHelperText>
        {formik.touched[inputId] && formik.errors[inputId]}
      </FormHelperText>
    </FormControl>
  );
};

export default FormSelect;
