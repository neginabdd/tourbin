import React from "react";
export default function EmailInput({ placeholder }){
    return (
        <label className="block mb-2">
          <input
            type="email"
            className="mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
            placeholder={placeholder}
          />
        </label>
      );
}