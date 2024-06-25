"use client"

import { GiHamburgerMenu } from "react-icons/gi";
import { RiHome3Line } from "react-icons/ri";
import { TbCalendarEvent } from "react-icons/tb";
import { HiOutlineLogout } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function HamburgerMenu() {

  const [open, setOpen] = useState(true);
  const router = useRouter();

  const logout = async () => {


    try {
      const response = await axios.get(
        "http://localhost:8000/api/signup/logout",
        { withCredentials: true }
      );

      console.log("Response: ", response.data);

      const { token } = response.data;
      Cookies.set("token", token, { expires: 0 }); // Set the token in the cookie with the correct key
      console.log("Received token:", token); // Log the token for debugging

      const allCookies = Cookies.get();
      console.log("All Cookies after setting token: ", allCookies);

      // Use the same key to retrieve the token
      const retrievedToken = Cookies.get("token");
      console.log("Retrieved token:", retrievedToken);

      localStorage.setItem("token", response.data.token);

      router.push("/login");

    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="bg-gray-500 w-[300px] h-screen flex flex-col justify-between">
      <div className="py-5 px-2">
        <Link href={""}>
          <div className="flex items-center p-7 px-5">
            <div className="pr-7">
              <GiHamburgerMenu className="size-6" />
            </div>
            <div className="text-2xl italic">ZCoder</div>
          </div>
        </Link>

        <div className="flex- items-center mx-3">
          <hr className="border" />
        </div>

        <Link href={"/dashboard"}>
          <div className="flex items-center pt-6 pb-4 px-5 gap-5">
            <div>
              <RiHome3Line className="size-6" />
            </div>
            <div>Dashboard</div>
          </div>
        </Link>

        <Link href={"/contestCalendar"}>
          <div className="flex items-center p-4 px-5 gap-5">
            <div className="">
              <TbCalendarEvent className="size-6" />
            </div>
            <div>Contest Calendar</div>
          </div>
        </Link>

        <Link href={"/savedProblems"}>
          <div className="flex items-center p-4 px-5 gap-5">
            <div className="">
              <TbCalendarEvent className="size-6" />
            </div>
            <div>Saved Problems</div>
          </div>
        </Link>

        <Link href={"/userProblems"}>
          <div className="flex items-center p-4 px-5 gap-5">
            <div className="">
              <TbCalendarEvent className="size-6" />
            </div>
            <div>My Problems</div>
          </div>
        </Link>
      </div>

      <div className="py-5 px-2">
        <Link href={"/login"}>
          <button className="flex items-center p-4 px-5 gap-5" onClick={logout}>
            <div className="">
              <HiOutlineLogout className="size-6" />
            </div>
            <div>Logout</div>
          </button>
        </Link>
      </div>
    </div>
  );
}
