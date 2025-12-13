import React, { useId } from "react";

function Input({
  label,
  type = "text",
  className = "",
  ref,
  ...props
}) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="inline-block mb-1 pl-1 text-gray-400 text-sm"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        ref={ref}
        type={type}
        className={`
          w-full px-3 py-2 rounded-lg bg-[#0f0a1b] text-gray-200 border border-purple-500/30 
          outline-none focus:border-purple-400 focus:bg-[#120d22] transition duration-200
          ${className} `}
        { ...props }
      />
    </div>
  );
}

export default Input;
