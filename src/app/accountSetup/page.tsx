import Link from "next/link";

export default function loginPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-[url('/accountSetup_bg.jpg')] bg-cover">
      <div className=" flex flex-col bg-white  w-full md:w-1/2 h-7/8 items-center justify-center text-gray-600 rounded-2xl shadow-lg">
        <div className="flex items-center justify-center p-4 m-2 text-3xl text-black font-bold font-mono">
          ZCoder
        </div>
        <div className="p-4 m-2 mb-8 text-lg">Finish Account Setup</div>
        <div className="w-1/2 m-4">
          <div className="text-xs">Username</div>
          <input
            type="text"
            placeholder=""
            className="border-b-2 w-full focus:outline-none py-1"
          />
        </div>

        <div className="w-1/2">
          <div className="text-xs">Codeforces Rating</div>
          <input
            type="text"
            placeholder=""
            className="bg-white border-b-2 w-full focus:outline-none py-1"
          />
        </div>

        <div className="w-1/2 m-4 mb-10">
          <div className="text-xs">Techstacks</div>
          <input
            type="text"
            placeholder=""
            className="bg-white border-b-2 w-full focus:outline-none py-1"
          />
        </div>

        <button className="bg-gray-500 text-white py-1 px-10 m-10 rounded-2xl">
          Submit
        </button>
      </div>

      {/* <div className="bg-white w-0 md:w-1/2  h-full hidden md:block">
        <img src="hero.jpg" alt="" className=" object-contain h-full " />
      </div> */}
    </div>
  );
}
