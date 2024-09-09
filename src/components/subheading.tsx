import { ReactNode } from "react";

const Subheading = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="font-display text-primary-800 mb-1 mt-4 text-2xl">
      {children}
    </h1>
  );
};

export { Subheading };
