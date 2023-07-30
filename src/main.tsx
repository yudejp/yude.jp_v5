import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "generouted/react-router";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import "./base.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Nav />
    <div className="m-5">
      <Routes />
    </div>
    <Footer />
  </React.StrictMode>
);
