"use client"
import HamburgerMenu from "../(Components)/hamburgerMenu";
import Problem from "../(Components)/problem";
import AddProblem from "../(Components)/addProblem";
import TopNavigation from "../(Components)/topNavigation";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export default function userProblems() {

    // const email = "user@example.com";
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

      console.log("Response:", response);

      if (response.status === 200) {
        const data = response.data;
        setEmail(data.email);
        console.log("Email data:", data.email);
      } else {
        console.error("Error fetching dashboard data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
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
        {email ? (
          <div className="bg-green-50">
            <Problem problemType="user" email={email} />
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
