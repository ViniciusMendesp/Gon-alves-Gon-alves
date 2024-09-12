import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={`px-4 lg:px-64  ${className || ""}`}>{children}</div>;
};
