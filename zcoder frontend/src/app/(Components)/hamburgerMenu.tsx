"use client"

import { GiHamburgerMenu } from "react-icons/gi";
import { RiHome3Line } from "react-icons/ri";
import { TbCalendarEvent } from "react-icons/tb";
import { HiOutlineLogout } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";

export default function HamburgerMenu() {

  const [open, setOpen] = useState(true);

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

        <Link href={""}>
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
        <Link href={""}>
          <div className="flex items-center p-4 px-5 gap-5">
            <div className="">
              <HiOutlineLogout className="size-6" />
            </div>
            <div>Logout</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
