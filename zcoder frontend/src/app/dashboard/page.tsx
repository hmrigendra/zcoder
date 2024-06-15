import HamburgerMenu from "../(Components)/hamburgerMenu";
import Problem from "../(Components)/problem";
import TopNavigation from "../(Components)/topNavigation";

export default function Dashboard() {
    return (
      <div className="flex">
        <div>
          <HamburgerMenu />
        </div>
        <div className="bg-red-50 w-full">
          <div>
            <TopNavigation />
          </div >
          <div className="bg-green-50">
            <Problem/>
          </div>
        </div>
      </div>
    );
}