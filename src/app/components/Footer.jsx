import React from "react";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <Image 
            src="/images/stirlinglogo.png" 
            alt="Logo"
            width={250} // Adjust the width as needed
            height={50} // Adjust the height as needed
            className="cursor-pointer"
          />
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
