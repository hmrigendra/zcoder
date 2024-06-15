'use client'
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function loginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [errorMessage, setErroMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/signup", {
        email,
        password,
      });

      console.log("Response: ", response.data);
    } catch (error) {
      console.error("Error: ", error);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" flex flex-col bg-white w-full md:w-1/2 h-full items-center justify-center text-gray-600">
        <div className="flex items-center justify-center p-4 m-8 text-3xl text-black font-bold font-mono">
          ZCoder
        </div>
        <div className="p-4 m-6 text-lg">Welcome to ZCoder</div>
        <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
          <div className="w-full m-4">
            <div className="text-xs">Email</div>
            <input
              type="text"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b-2 w-full focus:outline-none py-1"
            />
          </div>

          <div className="w-full m-4">
            <div className="text-xs">Password</div>
            <input
              type="text"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white border-b-2 w-full focus:outline-none py-1"
            />
          </div>

          <div className="w-full m-4">
            <div className="text-xs">Confirm Password</div>
            <input
              type="text"
              placeholder=""
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-white border-b-2 w-full focus:outline-none py-1"
            />
          </div>

          
            <button
              type="submit"
              className="bg-gray-500 text-white w-full py-1 px-10 mb-5 mt-2 rounded-2xl"
            >
              Sign up
            </button>
          
        </form>

        <div className="flex items-center justify-center mx-4 my-7">
          <div className="flex-grow border h-1px w-20 border-gray-400"></div>
          <span className="mx-2 text-gray-500">or</span>
          <div className="flex-grow border h-1px w-20 border-gray-400"></div>
        </div>
        <Link href={""}>
          <div className="flex items-center p-2">
            <img src="./google_logo.png" alt="" className="h-4 " />

            <div className="text-sm text-black">Sign in with google</div>
          </div>
        </Link>

        <div className="flex p-2 m-5">
          <div className="text-xs mx-1">Already have an account?</div>
          <Link href={"./login"}>
            <div className="text-xs underline">Login</div>
          </Link>
        </div>
      </div>

      <div className="bg-white w-0 md:w-1/2  h-full hidden md:block">
        <img
          src="signup_login_bg.jpg"
          alt=""
          className=" object-contain h-full "
        />
      </div>
    </div>
  );
}
