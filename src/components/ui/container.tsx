import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`px-4 py-4 lg:px-64 lg:py-6 ${className || ""}`}>
      {children}
    </div>
  );
};
