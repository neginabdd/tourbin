
import React from "react";

export default function Signup() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md mx-auto rounded-xl shadow-lg overflow-hidden md:max-w-2xl bg-gray-200 p-4">
        <div className="px-6 py-4">
          <h2 className="text-lg font-bold ">ثبت نام در توربین</h2>
          <form>
            <label className="block mb-2">
              <input
                type="email"
                className="mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:border-sky-500  focus:ring-sky-500"
                placeholder="ادرس ایمیل"
              />
            </label>
            <input
              type="password"
              className="mt-3 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500"
              placeholder="رمز"
            />
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-10 rounded mt-3">
              ثبت نام
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}