import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import AddProductLangka from "../components/products/AddProductLangka";

const AddLangka = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <AddProductLangka />
      </main>
    </>
  );
};

export default AddLangka;
