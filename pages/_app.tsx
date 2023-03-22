import React from "react";
import { Layout } from "../components";
import "../styles/globals.css";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <StateContext>
    <Layout>
      <Toaster />
      <Component {...pageProps} />
    </Layout>
  </StateContext>
);

export default MyApp;
