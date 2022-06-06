import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { Toolbar } from "@mui/material";
import { CustomChip, HeaderAppBar } from "./styles";
const Header: React.FC = () => {
  return (
    <HeaderAppBar position="static">
      <Toolbar>
        <CustomChip
          variant="outlined"
          color="primary"
          label="Hi Nour"
          deleteIcon={<KeyboardArrowDownOutlined />}
          onDelete={() => {}}
        />
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
