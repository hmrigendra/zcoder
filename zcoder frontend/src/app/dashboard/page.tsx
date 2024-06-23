"use client"

import HamburgerMenu from "../(Components)/hamburgerMenu";
import Problem from "../(Components)/problem";
import AddProblem from "../(Components)/addProblem";
import TopNavigation from "../(Components)/topNavigation";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {

  const [email, setEmail] = useState("");

  // useEffect(() => {
  //   const fetchEmailFromCookie = () => {
  //     const storedEmail = Cookies.get("userEmail");
  //     if (storedEmail) {
  //       const decodedEmail = decodeURIComponent(storedEmail);
  //       setEmail(decodedEmail);
  //       console.log("Decoded Email:", decodedEmail);
  //     } else {
  //       console.log("Email not found in cookies, retrying...");
  //       setTimeout(fetchEmailFromCookie, 500); // Retry after 500ms
  //     }
  //   };

  //   fetchEmailFromCookie();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const token = localStorage.getItem("token");

  //   } catch (error) {
      
  //   }
  // }

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
        },
      );


      // const response = await axios.get(
      //   "http://localhost:8000/api/authentication",
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }
      // );

      console.log("error message", response);

      if (response.status === 200) {
        console.log(response);
        const data = response.data;
        setEmail(data.email);
        console.log(data);
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

  return (
  
      <div className="flex">
        <div>
          <HamburgerMenu />
        </div>
        <div className="bg-red-50 w-full">
          <div>
            <TopNavigation />
        </div>
        <div className="bg-blue-100">{email}</div>
          <div>
          <AddProblem email={email} />
          </div>
          <div className="bg-green-50">
          <Problem problemType="public" email={email} />
          </div>
        </div>
      </div>
    );
}