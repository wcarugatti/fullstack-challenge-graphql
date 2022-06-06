import styled from "styled-components";
import { AppBar, Chip } from "@mui/material";

export const HeaderAppBar = styled(AppBar)`
  background-color: #fff;
  z-index: 0;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%);
  .MuiToolbar-root {
    justify-content: end;
  }
`;

export const CustomChip = styled(Chip)`
  color: var(--soft-black);
  border-color: var(--primary);
  border-width: 2px;
  font-weight: 600;
  padding-right: 7px;
  padding-left: 7px;
  svg {
    fill: var(--soft-black);
  }
`;
