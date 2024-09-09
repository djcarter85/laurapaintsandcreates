import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto max-w-screen-lg">{children}</div>;
};

export { Container };
