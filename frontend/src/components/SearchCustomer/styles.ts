import styled from "styled-components";
import { TextField } from "@mui/material";

export const SearchTextField = styled(TextField)`
  input {
    padding-top: 3px !important;
    padding-bottom: 1px !important;
    &::placeholder {
      font-style: italic;
    }
  }
  .MuiOutlinedInput-root {
    padding-right: 10px !important;
  }
  .MuiChip-root {
    background-color: var(--primary);
  }
`;

export const OptionsListElement = styled.li`
  > div {
    width: 50%;
  }
`;
