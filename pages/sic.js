import Glasscard from "../components/Glasscard.js";
import GradButton from "../components/GradButton.js";
import TopBar from "../components/TopBar.js";
import WarnLogo from "../public/warning.png";
import TickLogo from "../public/check.png";
import CalLogo from "../public/calendar.png";
import Image from "next/image";
import Link from "next/link";

const SIC = () => {
  return (
    <div>
      <TopBar />
      <Glasscard className="flex-1 w-full my-4 md:mr-4">
        <div className="flex flex-col items-center justify-center h-full p-4">
          <div className="text-3xl text-center">Student Interaction Corner</div>
          <button className="px-6 py-3 border-white border-2 rounded-lg my-5 md:hover:bg-gray-700">
            <span className="font-semibold">KNOW MORE</span> about us!
          </button>
        </div>
      </Glasscard>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0 md:gap-x-4 gap-y-4">
        <ProblemCard idx={1} />
        <ProblemCard idx={2} isExpired />
        <ProblemCard idx={3} />
        <ProblemCard idx={4} />
        <ProblemCard idx={5} isExpired />
      </div>
    </div>
  );
};

export default SIC;

const ProblemCard = ({
  idx = 0,
  title = "Title of the problem",
  endDate = "31st Feb, 2021",
  isExpired = false,
  forList = [1, 2, 3, 4],
  href = "/about",
}) => {
  return (
    <Link href={href}>
      <Glasscard className="shadow-lg hover:bg-gray-600 hover:bg-opacity-50 cursor-pointer">
        <div className="my-2">
          <p className="text-md border-b-white border-b-2 pb-4">
            Problem {idx}
          </p>
          <h1 className="text-3xl font-semibold py-3 w-full h-44">{title}</h1>
        </div>
        <div className="my-2">
          <div className="italic py-2">For :</div>
          <div className="flex space-x-2 px-1">
            {forList.map((item) => {
              if (item === 1) {
                return (
                  <GradButton noHover>
                    1st <span className="hidden md:inline-block"> Year </span>
                  </GradButton>
                );
              } else if (item === 2) {
                return (
                  <GradButton noHover>
                    2nd <span className="hidden md:inline-block"> Year </span>
                  </GradButton>
                );
              } else if (item === 3) {
                return (
                  <GradButton noHover>
                    3rd <span className="hidden md:inline-block"> Year </span>
                  </GradButton>
                );
              } else {
                return (
                  <GradButton noHover>
                    {item}th{" "}
                    <span className="hidden md:inline-block"> Year </span>
                  </GradButton>
                );
              }
            })}
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 md:items-center">
          <div
            className={`flex space-x-2 my-3 ${
              isExpired ? "opacity-50" : "opacity-100"
            }`}
          >
            <Image
              width={24}
              height={16}
              src={CalLogo}
              alt=""
              className="invert filter"
            />
            <p>{endDate}</p>
          </div>
          <div className="font-semibold">
            {isExpired ? (
              <div className="space-x-2 flex md:justify-center justify-start my-2 md:my-0">
                <Image
                  src={WarnLogo}
                  width={24}
                  height={16}
                  alt=""
                  className="filter invert"
                />
                <span>Expired</span>
              </div>
            ) : (
              <div className="space-x-2 flex md:justify-center justify-start my-2 md:my-0">
                <Image
                  src={TickLogo}
                  width={24}
                  height={16}
                  alt=""
                  className="filter invert"
                />
                <span>Active</span>
              </div>
            )}
          </div>
        </div>
      </Glasscard>
    </Link>
  );
};
