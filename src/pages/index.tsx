import React from "react";
import type { NextPage, GetServerSideProps } from "next";

const Home: NextPage = () => {
  return (
    <>
      {/* <HeroBanner/> */}
      <div className="text-center my-10 text-indigo-800">
        <h2 className="text-4xl font-extrabold">
          Discover the Newest Electronics Trends
        </h2>
        <p className="text-base text-gray-600 font-extralight">
          Get the Latest Smartphones, Tablets and More
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-5 w-full">
        {/* {["products1", "product2"].map((p: string) => (
          <Product key={p} />
        ))} */}
      </div>
      {/* <FooterBanner  /> */}
    </>
  );
};

export default Home;
