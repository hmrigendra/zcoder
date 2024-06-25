"use client"

import { useState, useEffect, KeyboardEvent, FormEvent, ChangeEvent } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/navigation";


export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [codeforcesHandle, setCodeforcesHandle] = useState("");
  const [techStacksArray, setTechStacksArray] = useState<string[]>([]);
  const [techStacks, setTechStacks] = useState("");
  const [shouldFetchData, setShouldFetchData] = useState(false);

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
        console.log("Email data:", data);
      } else {
        console.error("Error fetching dashboard data:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (shouldFetchData) {
      fetchData();
      setShouldFetchData(false);
    }
  }, [shouldFetchData]);

  const handleTechStacksKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && techStacks.trim() !== "") {
      event.preventDefault();
      setTechStacksArray((prevArray) => [...prevArray, techStacks.trim()]);
      setTechStacks("");
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    try {
      event.preventDefault();
      console.log({ email, username, codeforcesHandle, techStacksArray });

      const data = {
        email: email,
        username: username,
        codeforcesHandle: `https://codeforces.com/profile/${codeforcesHandle}`,
        techStacksArray: techStacksArray
      }
      const response = await axios.post("http://localhost:8000/api/profile", data);

      console.log("Response: ", response.data);

      router.push("/dashboard");

      setUsername("");
      setCodeforcesHandle("");
      setTechStacks("");
      setTechStacksArray([]);

    } catch (error) {
      console.log("Error: ", error)
    }
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShouldFetchData(event.target.checked);
  }

  return (
    <div className="flex items-center justify-center h-screen bg-[url('/accountSetup_bg.jpg')] bg-cover">
      <div className="flex flex-col bg-white  w-full md:w-1/2 h-7/8 items-center justify-center text-gray-600 rounded-2xl shadow-lg">
        <div className="flex items-center justify-center p-4 m-2 text-3xl text-black font-bold font-mono">
          ZCoder
        </div>
        <div className="p-4 m-2 mb-8 text-lg">Finish Account Setup</div>
        <form onSubmit={handleSubmit}>
          <div className="w-1/2 m-4">
            <label htmlFor="UserName" className="text-xs">
              Username
            </label>
            <input
              id="UserName"
              type="text"
              placeholder=""
              value={username}
              className="border-b-2 w-full focus:outline-none py-1"
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          <div className="w-1/2">
            <label htmlFor="CodeforcesID" className="text-xs">
              Codeforces ID
            </label>
            <input
              id="CodeforcesID"
              type="text"
              placeholder=""
              value={codeforcesHandle}
              className="bg-white border-b-2 w-full focus:outline-none py-1"
              onChange={(event) => setCodeforcesHandle(event.target.value)}
            />
          </div>

          <div className="w-1/2 m-4 mb-10">
            <label htmlFor="Techstacks" className="text-xs">
              Techstacks
            </label>
            <input
              id="Techstacks"
              type="text"
              placeholder=""
              value={techStacks}
              className="bg-white border-b-2 w-full focus:outline-none py-1"
              onChange={(event) => setTechStacks(event.target.value)}
              onKeyDown={handleTechStacksKeyDown}
            />
          </div>

          <div className="">
            {techStacksArray.map((stack, index) => {
              return (
                <span key={index} className="">
                  {stack}
                </span>
              );
            })}
          </div>

          <div>
            <input
              id="fetchData"
              type="checkbox"
              placeholder=""
              onChange={handleCheckboxChange}
              title="Fetch Data"
            />
            <label htmlFor="fetchData">
              I agree to all the terms and conditions.
            </label>
          </div>

          <button
            type="submit"
            className="bg-gray-500 text-white py-1 px-10 m-10 rounded-2xl"
          >
            Submit
          </button>
        </form>
      </div>

      {/* <div className="bg-white w-0 md:w-1/2  h-full hidden md:block">
        <img src="hero.jpg" alt="" className=" object-contain h-full " />
      </div> */}
    </div>
  );
}
