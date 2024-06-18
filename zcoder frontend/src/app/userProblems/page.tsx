import HamburgerMenu from "../(Components)/hamburgerMenu";
import Problem from "../(Components)/problem";
import AddProblem from "../(Components)/addProblem";
import TopNavigation from "../(Components)/topNavigation";
import { useParams } from "next/navigation";

export default function userProblems() {

    const email = "user@example.com";

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
                  <Problem problemType="user" email={email} />
        </div>
      </div>
    </div>
  );
}
