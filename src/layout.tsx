import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Main } from "./components/main";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export { Layout };
