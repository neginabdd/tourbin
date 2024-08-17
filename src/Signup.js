
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("حالا میتونی سفرت رو بسازی🗺");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md mx-auto rounded-xl shadow-lg overflow-hidden md:max-w-2xl bg-gray backdrop-blur-md">
        <div className="px-6 py-4">
          <h2 className="text-lg font-bold ">ثبت نام در توربین</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first_name">
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="first_name"
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                placeholder="نام"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last_name">
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="last_name"
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                placeholder="نام خانوادگی"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="کلمه عبور"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm_password">
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirm_password"
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder="تکرار کلمه عبور"
              />
            </div>

            <button
              className="bg-orange-500 hover:bg-orange-700 transition duration-500 ease-in-out text-white font-bold py-2 px-10 rounded mt-3"
              type="submit"
            >
             ثبت نام
            </button>
          </form>
          <p className="font-bold mt-2 hover:scale-110 transition duration-450">
          <Link to="/Log">عضو هستید؟ وارد شوید</Link>
          </p>
          </div>
          </div>
          </div>
  );
         }