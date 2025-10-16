import React from "react";
import type { FieldError, UseFormRegister } from "react-hook-form";

interface InputFieldProps {
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  error?: FieldError;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
}) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={name} className="py-2 font-medium">
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`px-4 py-2 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 ${error ? "border border-red-500" : ""
          }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default InputField;
