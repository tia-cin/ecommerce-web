import React from "react";
import Link from "next/link";
import { urlfFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlfFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
            alt={`product-${name}`}
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
