import styled from "styled-components";
import { Button, Card, Grid, TextField } from "@mui/material";

export const Container = styled.div`
  padding: 40px;
  @media (max-width: 600px) {
    padding: 20px;
  }
`;

export const FormCard = styled(Card)`
  padding: 35px;
  @media (max-width: 600px) {
    padding: 20px;
  }
`;

export const FormContent = styled.form`
  max-width: 500px;
`;

export const FormGrid = styled(Grid)``;

export const FormGridRow = styled(Grid)`
  display: flex;
  flex-direction: column;
`;

export const FormSubmitButton = styled(Button)`
  border-radius: 30px;
  padding: 10px 20px;
  background-color: var(--primary);
  margin-top: 10px;
  font-weight: 700;
  &:hover {
    background-color: var(--dark-purple);
  }
`;
export const FormDeleteButton = styled(Button)`
  margin-top: 10px;
  font-weight: 700;
  border-bottom: 3px solid;
  border-radius: 0;
`;

export const FormButtons = styled.div`
  margin-top: 55px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }

  .button-wrapper {
    text-align: center;
  }
`;

export const OptionsListElement = styled.li`
  > div {
    width: 50%;
  }
`;
