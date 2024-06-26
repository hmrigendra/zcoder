"use client"

import HamburgerMenu from "../(Components)/hamburgerMenu";
import Problem from "../(Components)/problem";
import AddProblem from "../(Components)/addProblem";
import TopNavigation from "../(Components)/topNavigation";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export default function savedProblems() {

  const [email, setEmail] = useState("");

  const fetchData = async () => {
    try {
      const token = Cookies.get("token");
      console.log("Received token:", token);

      if (!token) {
        throw new Error("No token found");
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };
      console.log("Headers to be sent:", headers);

      const response = await axios.get(
        "http://localhost:8000/api/authentication",
        {
          headers: headers,
          withCredentials: true,
        }
      );

      // const response = await axios.get(
      //   "http://localhost:8000/api/authentication",
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }
      // );

      console.log("response email is here: ", response.data.email);

      if (response.status === 200) {
        console.log(response);
        const data = response.data;
        setEmail(data.email);
        console.log("email isssss: ", data.email);
      } else {
        console.log("Error fetching dashboard data");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const email = "seven@gmail.com";
  return (
    <div className="flex">
      <div>
        <HamburgerMenu />
      </div>
      <div className="bg-red-50 w-full">
        <div>
          <TopNavigation />
        </div>
        {email ? (
        <div className="bg-green-50">
          <Problem problemType="saved" email={email} />
          </div>
        ) : (
            <div>Loading...</div>
        )
          }
      </div>
    </div>
  );
}
