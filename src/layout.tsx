import { Outlet } from "react-router-dom";
import { Container } from "./components/container";
import { Header } from "./components/header";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr]">
          <Nav />
          <div className="px-4 py-4">
            <Outlet />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export { Layout };
