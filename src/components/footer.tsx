import { ReactNode } from "react";
import { Facebook, Instagram } from "react-bootstrap-icons";

const FooterIconLink = ({ href, icon }: { href: string; icon: ReactNode }) => {
  return (
    <a
      className="text-2xl text-primary-200 hover:text-secondary-300"
      href={href}
    >
      {icon}
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="mt-4 flex flex-row justify-center gap-3 bg-primary-600 py-4">
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
