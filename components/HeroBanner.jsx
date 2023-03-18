import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="px-24 py-10 bg-gray-400 rounded-3xl text-xl relative h-500 w-full">
      <div>
        <p className="text-xl">{heroBanner.smallText}</p>
        <h3 className="text-6xl mt-1">{heroBanner.midText}</h3>
        <h1 className="text-white text-9xl -ml-5 uppercase">
          {heroBanner.largeText}
        </h1>
        <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="hero-banner-image relative left-60 -top-40"
        />
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button
              className="rounded-2xl px-2.5 py-4 bg-indigo-600 text-white mt-10 text-lg font-medium cursor-pointer"
              style={{ zIndex: 10000 }}
              type="button"
            >
              {heroBanner.buttonText}
            </button>
          </Link>
          <div className="absolute right-3 bottom-1 w-300 flex flex-col">
            <h5 className="mb-3 font-bold text-base self-end text-indigo-600">
              Description
            </h5>
            <p className="font-base text-end text-gray-600">
              {heroBanner.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
