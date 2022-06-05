import { Toolbar } from "@mui/material";
import { HeaderAppBar } from "./styles";
const Header: React.FC = () => {
  return (
    <HeaderAppBar
      position="static"
    >
      <Toolbar></Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
