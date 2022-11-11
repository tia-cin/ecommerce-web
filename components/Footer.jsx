import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="text-indigo-800 text-center mt-4 py-8 px-2.5 font-bold flex flex-col items-center gap-2.5 justify-center">
      <p>2022 Ecommerce Store All rights reserved</p>
      <p className="text-3xl flex gap-5">
        <AiFillFacebook />
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillLinkedin />
      </p>
    </div>
  );
};

export default Footer;
