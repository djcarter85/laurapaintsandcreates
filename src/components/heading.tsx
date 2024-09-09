import { ReactNode } from "react";

const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="font-display text-primary-800 mb-1 mt-4 text-4xl">
      {children}
    </h1>
  );
};

export { Heading };
