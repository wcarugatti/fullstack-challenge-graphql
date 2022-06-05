import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/client";
import GlobalStyle from "./styles/GlobalStyle";
import Layout from "./components/Layout/Layout";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Layout />
        <GlobalStyle />
      </StyledEngineProvider>
    </ApolloProvider>
  );
};

export default App;
