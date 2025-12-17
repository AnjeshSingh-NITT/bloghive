import React from "react";

export default function Button({
  children,
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`
        inline-block px-5 py-2 rounded-full
        bg-purple-600/20 text-white
        border border-purple-500/30
        hover:bg-purple-600/30 hover:text-purple-200
        transition duration-200
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
