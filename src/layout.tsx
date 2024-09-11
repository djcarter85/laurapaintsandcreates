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
        <div className="my-4 flex flex-col gap-4 lg:my-6 lg:gap-6">
          <Nav />
          <Main />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export { Layout };
