import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";

const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="text-center my-10 text-indigo-800">
        <h2 className="text-4xl font-extrabold">Beset Selling Products</h2>
        <p className="text-base text-gray-600 font-extralight">
          Speakers of many variations
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-5 w-full">
        {products?.map((p) => (
          <Product key={p._id} product={p} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData.length && bannerData[0]} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
