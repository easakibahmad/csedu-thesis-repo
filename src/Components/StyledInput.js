import React from "react";

const StyledInput = ({ type, label, register, name, errors }) => {
  return (
    <div className="input-container">
      <input
        type={type}
        {...register(name, { required: `${label} is required` })}
      />
      {errors[name] && <p className="text-red-500">{errors[name]?.message}</p>}
      <label className={errors[name] ? "error-label" : ""} htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default StyledInput;
