import Link from "next/link";
import React from "react";

const Button = ({ text, variant, isLink = false, href }) => {
  if (isLink)
    return (
      <Link
        href={href}
        className={`cursor-pointer sm:text-base text-[14px] sm:px-6 px-4 sm:py-4 py-3 rounded-full ${
          variant === "outline"
            ? "bg-white text-[#0a3af8] hover:bg-[#0a3af8] hover:text-white border border-primary"
            : "bg-[#0a3af8] text-white hover:bg-white hover:text-[#0a3af8] border border-[#0a3af8]"
        } font-medium transition duration-500`}
      >
        {text}
      </Link>
    );

  return (
    <button
      className={`cursor-pointer sm:text-base text-[14px] sm:px-6 px-4 sm:py-4 py-3 rounded-full ${
        variant === "outline"
          ? "bg-white text-[#0a3af8] hover:bg-[#0a3af8] hover:text-white border border-primary"
          : "bg-[#0a3af8] text-white hover:bg-white hover:text-[#0a3af8] border border-[#0a3af8]"
      } font-medium transition duration-500`}
    >
      {text}
    </button>
  );
};

export default Button;
