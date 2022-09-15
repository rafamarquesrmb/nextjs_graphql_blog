import React from "react";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="container mx-auto px-10 mt-8">
      <div className="border-t w-full inline-block border-blue-400 py-8">
        <div className="block w-full text-center">
          <Link href="https://github.com/rafamarquesrmb" target="_blank">
            <span className="cursor-pointer font-bold text-center text-white">
              by Rafael Marques
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
