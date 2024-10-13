import { Outlet } from "react-router-dom";
import { Container } from "./container";

const Main = () => {
  return (
    <main className="my-4 grow">
      <Container>
        <Outlet />
      </Container>
    </main>
  );
};

export { Main };
