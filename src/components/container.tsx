import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto max-w-screen-lg px-4 lg:px-6">{children}</div>;
};

export { Container };
