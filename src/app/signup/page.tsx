import Link from "next/link";

export default function loginPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" flex flex-col bg-white w-full md:w-1/2 h-full items-center justify-center text-gray-600">
        <div className="flex items-center justify-center p-4 m-8 text-3xl text-black font-bold font-mono">
          ZCoder
        </div>
        <div className="p-4 m-6 text-lg">Welcome to ZCoder</div>
        <div className="w-1/2 m-4">
          <div className="text-xs">Email</div>
          <input
            type="text"
            placeholder=""
            className="border-b-2 w-full focus:outline-none py-1"
          />
        </div>

        <div className="w-1/2">
          <div className="text-xs">Password</div>
          <input
            type="text"
            placeholder=""
            className="bg-white border-b-2 w-full focus:outline-none py-1"
          />
        </div>

        <div className="w-1/2 m-4">
          <div className="text-xs">Confirm Password</div>
          <input
            type="text"
            placeholder=""
            className="bg-white border-b-2 w-full focus:outline-none py-1"
          />
        </div>

        <Link href={"./accountSetup"}>
          <button className="bg-gray-500 text-white py-1 px-10 mb-5 mt-2 rounded-2xl">
            Sign up
          </button>
        </Link>

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
