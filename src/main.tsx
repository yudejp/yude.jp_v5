import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "generouted/react-router";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import "./base.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="mx-auto max-w-[600px]">
      <Nav />
      <div className="mx-9">
        <Routes />
      </div>
      <Footer />
    </div>
  </React.StrictMode>
);
