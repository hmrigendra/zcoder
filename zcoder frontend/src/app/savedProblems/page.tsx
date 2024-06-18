import HamburgerMenu from "../(Components)/hamburgerMenu";
import Problem from "../(Components)/problem";
import AddProblem from "../(Components)/addProblem";
import TopNavigation from "../(Components)/topNavigation";

export default function savedProblems() {

  const email = "seven@gmail.com";
  return (
    <div className="flex">
      <div>
        <HamburgerMenu />
      </div>
      <div className="bg-red-50 w-full">
        <div>
          <TopNavigation />
        </div>
        <div className="bg-green-50">
          <Problem problemType="saved" email={email} />
        </div>
      </div>
    </div>
  );
}
