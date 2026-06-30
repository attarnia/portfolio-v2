import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return <div className="app-container">{children}</div>;
}

export default Container;
