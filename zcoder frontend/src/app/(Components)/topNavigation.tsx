import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function TopNavigation() {
  return (
    <div className="">
          <div className="flex justify-end text-black m-10 px-10 py-5 gap-10 bg-red-100">
              <CgProfile className="size-6"/>
              <IoMdNotificationsOutline className="size-6"/>
      </div>
    </div>
  );
}
