import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="p-2.5">
      <Head>
        <title>Ecommerce Store</title>
        <link rel="icon" href="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fraw.githubusercontent.com%2Fkbrsh%2Fmoon%2Fgh-pages%2Fimg%2Flogo.png&f=1&nofb=1&ipt=b431312ebae66002433a6c023072e2707fc60bcd5dd4125377c8b851d81d2818&ipo=images"/>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="m-auto w-full max-w-screen-xl">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
