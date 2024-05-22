"use client";

import React from "react";
import { Footer } from "../view/footer";
import { Header } from "../view/header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
