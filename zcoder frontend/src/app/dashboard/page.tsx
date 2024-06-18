"use client"

import HamburgerMenu from "../(Components)/hamburgerMenu";
import Problem from "../(Components)/problem";
import AddProblem from "../(Components)/addProblem";
import TopNavigation from "../(Components)/topNavigation";
// import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Dashboard() {

  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.get("userEmail");
    if (storedEmail) {
      setEmail(storedEmail);
      console.log(storedEmail);
    }
    else {
      console.log("Email not found in cookies");
    }
  }, []);

  return (
  
      <div className="flex">
        <div>
          <HamburgerMenu />
        </div>
        <div className="bg-red-50 w-full">
          <div>
            <TopNavigation />
          </div>
          <div>
            <AddProblem />
          </div>
          <div className="bg-green-50">
            <Problem problemType="public"/>
          </div>
        </div>
      </div>
    );
}