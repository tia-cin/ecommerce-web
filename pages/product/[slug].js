import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { Product } from "../../components";
import { useStateContext } from "../../context/StateContext";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  const [index, setIndex] = useState(0);

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  return (
    <div>
      <div className="flex text-black gap-10 m-10 mt-14">
        <div>
          <div className="">
            <img
              src={urlFor(image && image[index])}
              alt={name}
              className="rounded-xl bg-gray-200 w-400 h-400 cursor-pointer transition-all hover:bg-indigo-600"
            />
          </div>
          <div className="flex gap-2.5 mt-5">
            {image?.map((img, i) => (
              <img
                src={urlFor(img)}
                className={`rounded-xl w-20 h-20 cursor-pointer  ${i === index ? "bg-indigo-600" : "bg-gray-200"}`}
                onMouseEnter={() => setIndex(i)}
                key={i}
              />
            ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="text-red-500 mt-2.5 flex items-center">
            <div className="flex items-center">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p className="mt-0 text-xs">(20)</p>
          </div>
          <h4 className="mt-2.5">Details: </h4>
          <p className="mt-2.5">{details}</p>
          <p className="mt-5 font-bold text-2xl text-red-500">${price}</p>
          <div className="flex gap-4 items-center mt-2.5">
            <h3>Quantity:</h3>
            <p className="p-2 flex items-center gap-4 border border-gray-200">
              <span className="text-red-500" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="text-lg">{qty}</span>
              <span className="text-green-500" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              className="text-center rounded-lg flex gap-7 py-2.5 px-5 border-indigo-600 border mt-10 text-lg font-medium text-indigo-600 cursor-pointer w-200 scale-100 transition-all hover:scale-110"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button 
              type="button" 
              className="text-center rounded-lg flex gap-7 py-2.5 bg-indigo-600 px-5 mt-10 text-lg font-medium text-white cursor-pointer w-200 scale-100 transition-all hover:scale-110" 
              onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-28">
        <h2 className="text-center m-12 text-indigo-900 text-3xl">Recomended Products</h2>
        <div className="relative h-400 w-full overflow-hidden">
          <div className="flex justify-center gap-4 mt-5 track">
            {products.map((item, i) => (
              <Product key={i} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] { slug { current } }`;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
