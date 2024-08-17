import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
export default function Log() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("خوش آمدید🌏");
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md mx-auto rounded-xl shadow-lg overflow-hidden md:max-w-2xl bg-gray backdrop-blur-md">
        <div className="px-6 py-4">
          <h2 className="text-lg font-bold ">سلام!</h2>
          <h2 className="text-lg font-bold ">ورود به توربین</h2>
          <form onSubmit={handleSubmit}>
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
            <button className="bg-orange-500 hover:bg-orange-700 transition duration-500 ease-in-out text-white font-bold py-2 px-10 rounded mt-3">
              ورود
            </button>
          </form>
          <p className="font-bold mt-2 hover:scale-110 transition duration-450">هنوز عضو نیستید؟ <Link to="/signup">ثبت نام کنید</Link>
          </p>
        </div>
      </div>
    </div>
  );
}