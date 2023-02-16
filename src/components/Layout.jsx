import React from "react";

import { BrowserRouter } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import ProductViewModal from "./ProductViewModal";

import AllRoutes from "../routes/Routes";

const Layout = () => {
  return (
    <BrowserRouter basename="fashion">
      <Header />
      <div className="container">
        <div className="main">
          <AllRoutes />
        </div>
      </div>
      <Footer />
      <ProductViewModal />
    </BrowserRouter>
  );
};

export default Layout;
