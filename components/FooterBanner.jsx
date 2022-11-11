import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    product,
    buttonText,
    image,
    desc,
  },
}) => {
  return (
    <div className="pt-24 px-10 bg-indigo-600 rounded-2xl relative h-400 text-white w-full mt-28">
      <div className="flex justify-between">
        <div className="left">
          <p className="m-4.5">{discount}</p>
          <h3 className="font-extrabold text-7xl">{largeText1}</h3>
          <h3 className="font-extrabold text-7xl">{largeText2}</h3>
          <p className="m-4.5">{saleTime}</p>
        </div>
        <div className="right">
          <p className="text-lg">{smallText}</p>
          <h3 className="font-extrabold text-7xl">{midText}</h3>
          <p className="text-lg">{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        <img
          src={urlFor(image)}
          alt={`product-${product}`}
          className="-top-1/4 left-1/4 absolute"
        />
      </div>
    </div>
  );
};

export default FooterBanner;
