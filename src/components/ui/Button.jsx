import Link from "next/link";
import React from "react";

const Button = ({ text, variant, isLink = false, href }) => {
  if (isLink)
    return (
      <Link
        href={href}
        className={`cursor-pointer text-center sm:text-base text-[14px] sm:px-6 px-4 sm:py-3.5 py-3 rounded-full ${
          variant === "outline"
            ? "bg-white text-[#3966b0] hover:bg-[#3966b0] hover:text-white border border-primary"
            : "bg-[#3966b0] text-white hover:bg-white hover:text-[#3966b0] border border-[#3966b0]"
        } font-medium transition duration-500`}
      >
        {text}
      </Link>
    );

  return (
    <button
      className={`cursor-pointer sm:text-base text-[14px] sm:px-6 px-4 sm:py-3.5 py-3 rounded-full ${
        variant === "outline"
          ? "bg-white text-[#3966b0] hover:bg-[#3966b0] hover:text-white border border-primary"
          : "bg-[#3966b0] text-white hover:bg-white hover:text-[#3966b0] border border-[#3966b0]"
      } font-medium transition duration-500`}
    >
      {text}
    </button>
  );
};

export default Button;
