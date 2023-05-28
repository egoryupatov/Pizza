import React from "react";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Navbar />
    </>
  );
};
