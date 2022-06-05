import ScopioLogo from "../../assets/scopio-logo.png";
import { Container, SideBarIcons } from "./styles";
import {
  ArrowCircleRightOutlined,
  FileUploadOutlined,
  ImageOutlined,
  SettingsOutlined,
  StorageOutlined,
} from "@mui/icons-material";
const SideMenu: React.FC = () => {
  return (
    <Container>
      <img
        width={35}
        src={ScopioLogo}
        alt="Scopio Logo"
      />

      <SideBarIcons>
        <FileUploadOutlined fontSize="large" sx={{ color: "#fff" }} />
        <ImageOutlined fontSize="large" sx={{ color: "#fff" }} />
        <StorageOutlined fontSize="large" sx={{ color: "#fff" }} />
        <SettingsOutlined fontSize="large" sx={{ color: "#fff" }} />
      </SideBarIcons>

      <ArrowCircleRightOutlined fontSize="large" sx={{ color: "#fff" }} />
    </Container>
  );
};

export default SideMenu;
