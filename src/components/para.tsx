import { ReactNode } from "react";

const Para = ({ children }: { children: ReactNode }) => {
  return <p className="mb-4 text-lg md:text-xl">{children}</p>;
};

export { Para };
