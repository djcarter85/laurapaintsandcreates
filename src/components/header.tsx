import logo from "../assets/logo.jpg";
import { Container } from "./container";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-primary-600 to-primary-500 py-4">
      <Container>
        <img src={logo} className="mx-auto size-40 rounded-full" />
      </Container>
    </div>
  );
};

export { Header };
