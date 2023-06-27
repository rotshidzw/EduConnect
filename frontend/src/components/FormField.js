import React from 'react';

const FormField = ({ label, type, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={label} className="block font-bold mb-1">{label}:</label>
      <input
        type={type}
        id={label}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default FormField;
