import { ReactNode } from "react";
import { Link } from "react-router-dom";

const linkStyle = "text-secondary-600 underline hover:no-underline";

export const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <a href={href} className={linkStyle}>
      {children}
    </a>
  );
};

export const InternalLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <Link to={href} className={linkStyle}>
      {children}
    </Link>
  );
};
