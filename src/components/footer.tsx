import { ReactNode } from "react";
import { Facebook, Instagram } from "react-bootstrap-icons";
import { Container } from "./container";
import { FacebookUrl, InstagramUrl } from "../constants";

const FooterIconLink = ({ href, icon }: { href: string; icon: ReactNode }) => {
  return (
    <a className="text-2xl hover:text-secondary-400" href={href}>
      {icon}
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary-600 bg-gradient-to-r from-primary-600 to-primary-500 py-4 text-primary-100">
      <Container>
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
          <div className="flex flex-row gap-3">
            <FooterIconLink href={InstagramUrl} icon={<Instagram />} />
            <FooterIconLink href={FacebookUrl} icon={<Facebook />} />
          </div>
          <div className="text-xl md:order-first">
            Laura Paints & Creates &copy; 2024
          </div>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
