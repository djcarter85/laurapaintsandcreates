import { ReactNode } from "react";

export const TextBlock = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto my-8 max-w-xl">{children}</div>;
};
