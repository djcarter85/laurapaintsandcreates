import { ReactNode } from "react";
import { Facebook, Instagram } from "react-bootstrap-icons";
import { Container } from "./container";
import { EtsyUrl, FacebookUrl, InstagramUrl } from "../constants";

const FooterIconLink = ({ href, icon }: { href: string; icon: ReactNode }) => {
  return (
    <a className="text-2xl hover:text-secondary-400" href={href}>
      {icon}
    </a>
  );
};

const EtsyIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 700 700"
    >
      <path
        fill="currentColor"
        d="M263.00874 138.0205v197.18256s69.47994 0 106.665-2.82252c29.24262-5.11992 34.6251-7.94244 40.00758-37.18506l10.76496-42.8301h31.80258l-5.38248 93.60264 2.82252 95.90004h-32.06514l-7.94244-37.44762c-7.94244-26.64984-18.7074-32.06514-40.00758-34.6251-26.64984-2.82252-106.665-2.82252-106.665-2.82252V532.3528c0 31.80258 16.14744 45.39006 53.3325 45.39006h112.04748c34.6251 0 69.21738-2.82252 90.78012-53.3325l28.98006-64.09746h26.9124c-2.82252 13.32492-16.14744 130.75488-18.7074 157.17498 0 0-101.28252-2.55996-143.85006-2.55996H220.4412l-114.60744 2.55996v-28.98006l37.18506-8.205c26.9124-5.38248 34.85484-13.32492 34.85484-34.6251 0 0 2.82252-72.0399 2.82252-192.06264 0-119.72736-2.82252-191.80008-2.82252-191.80008 0-23.86014-7.94244-29.24262-34.85484-34.6251l-37.18506-7.8768V90.07048l112.04748 2.2974h213.33c42.56754 0 114.34488-7.67988 114.34488-7.67988s-2.55996 45.1275-5.38248 151.7925h-29.24262l-10.76496-37.44762c-10.5024-47.95002-26.4201-71.81016-55.89246-71.81016H276.59622c-13.58748.03282-13.58748 2.59278-13.58748 10.79778z M 0 0 L 0 700 L 700 700 L 700 0 L 0 0"
      />      
    </svg>
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
            <FooterIconLink href={EtsyUrl} icon={<EtsyIcon />} />
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
