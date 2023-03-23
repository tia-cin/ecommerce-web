import React from "react";
import Head from "next/head";

const UnderConstruction = () => {
  return (
    <div>
      <Head>
        <title>Under Construction</title>
      </Head>
      <div className="relative w-1/2 top-60 left-96">
        <h1 className="text-5xl font-bold text-center text-indigo-800">
          Under Construction
        </h1>
        <p className="text-center mt-2 text-lg text-gray-600">
          Sorry, this page is currently under construction.
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
