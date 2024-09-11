import logo from "../assets/logo.png";
import { Container } from "./container";
import { Nav } from "./nav";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-500 py-4">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
          <img src={logo} className="my-4" />
          <Nav />
        </div>
      </Container>
    </div>
  );
};

export { Header };
