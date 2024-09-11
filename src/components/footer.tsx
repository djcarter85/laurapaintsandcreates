import { ReactNode } from "react";
import { Facebook, Instagram } from "react-bootstrap-icons";

const FooterIconLink = ({ href, icon }: { href: string; icon: ReactNode }) => {
  return (
    <a
      className="text-2xl text-primary-100 hover:text-secondary-300"
      href={href}
    >
      {icon}
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="flex flex-row justify-center gap-3 bg-primary-600 bg-gradient-to-r from-primary-600 to-primary-500 py-4">
      <FooterIconLink
        href="https://www.instagram.com/laurapaintsandcreates/"
        icon={<Instagram />}
      />
      <FooterIconLink
        href="https://www.facebook.com/ljkirk.art"
        icon={<Facebook />}
      />
    </footer>
  );
};

export { Footer };
