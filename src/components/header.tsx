import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Container } from "./container";
import { Nav } from "./nav";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-500 py-4">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Link to="/">
            <img src={logo} className="my-4" />
          </Link>
          <Nav />
        </div>
      </Container>
    </div>
  );
};

export { Header };
