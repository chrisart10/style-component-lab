import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import theme from "./components/styles/Theme";
import { StyledContainer } from "./components/styles/Container.styled";
import { GlobalStyles } from "./components/styles/Global.style";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <StyledContainer>
          <h1>Hello World</h1>
        </StyledContainer>
      </>
    </ThemeProvider>

  );
}

export default App;
