import React from "react";

const Footer = () => {
  return (
    <div className=" py-4  h-[10vh] text-center bg-gray-800 text-white flex items-center justify-center">
      Copyright &copy; 2025.{" "}
      <a
        href="https://www.linkedin.com/in/ibsa-abera-37b6a2333/"
        className="text-blue-500 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ibsa A.
      </a>{" "}
      All rights reserved
    </div>
  );
};

export default Footer;
