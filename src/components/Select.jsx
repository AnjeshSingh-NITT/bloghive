import React, { useId } from 'react'

function Select({
  options,
  label,
  className = "",
  ref,
  ...props
}) {
  const id = useId()

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="inline-block mb-1 pl-1 text-sm text-gray-400"
        >
          {label}
        </label>
      )}

      <select
        {...props}
        id={id}
        ref={ref}
        className={`w-full px-3 py-2 rounded-lg bg-[#0f0a1b] text-gray-200 border border-purple-500/30
          outline-none focus:border-purple-400 focus:bg-[#120d22] transition duration-200 ${className} `}>
        {options?.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-[#0f0a1b] text-gray-200"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
