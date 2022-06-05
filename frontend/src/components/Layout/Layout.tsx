import SideMenu from "./../SideMenu/SideMenu";
import CustomerForm from "../CustomerForm/CustomerForm";
import { Container, Page, PageContent } from "./styles";
import Header from "./../Header/Header";
const Layout: React.FC = () => {
  return (
    <Container>
      <SideMenu />
      <Page>
        <Header />
        <PageContent>
          <CustomerForm />
        </PageContent>
      </Page>
    </Container>
  );
};

export default Layout;
