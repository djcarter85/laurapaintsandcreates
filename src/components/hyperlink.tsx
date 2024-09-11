import { ReactNode } from "react";

const Hyperlink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <a href={href} className="text-secondary-600 underline hover:no-underline">
      {children}
    </a>
  );
};

export { Hyperlink };
