import { Container } from "./components/container";
import { Header } from "./components/header";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { Main } from "./components/main";

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] lg:gap-6">
          <Nav />
          <Main />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export { Layout };
