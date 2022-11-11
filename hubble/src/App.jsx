import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import theme from "./components/styles/Theme";
import { GlobalStyles } from "./components/styles/Global.style";
import content from "./content";
import { Container } from "./components/styles/Container.styled";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item) => {
            return (
              <Card key={item.id}
                item={item}
              />
            )
          }
          )}
        </Container>
        <Footer />
      </>
    </ThemeProvider>

  );
}

export default App;
