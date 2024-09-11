import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="my-4 lg:my-6">
      <Outlet />
    </main>
  );
};

export { Main };
