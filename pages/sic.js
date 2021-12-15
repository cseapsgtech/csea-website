import Head from 'next/head'
import Glasscard from "../components/Glasscard.js";
import GradientButton from "../components/GradientButton.js";
import TopBar from "../components/TopBar.js";
import TitleWithLine from "../components/TitleWithLine.js";
import SICProbStatusIndicator from "../components/SICProbStatusIndicator.js";
import CalendarIconAndDate from "../components/CalendarIconAndDate.js";
import Link from "next/link";

const SIC = () => {
  return (
    <div>
      <Head>
        <title>SIC - CSEA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopBar />
      <Glasscard styles="flex-1 w-full mb-6">
        <div className="flex flex-col items-center justify-center h-full p-4">
          <div className="text-xl md:text-3xl text-center">Student Interaction Corner</div>
          <button className="text-sm px-6 py-3 border-white border-2 mt-5 rounded-lg md:hover:bg-gray-700">
            <span className="font-semibold">KNOW MORE</span> about us!
          </button>
        </div>
      </Glasscard>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 mb-6">
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
  statement = `Problem statement goes here - Lorem ipsum dolor sit amet,
  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
  exercitation ullamco laboris.`,
  endDate = "31st Feb, 2021",
  isExpired = false,
  forList = [1, 2, 3, 4],
  href = "/about",
}) => {
  return (
    <Link href={href}>
      <Glasscard styles="shadow-lg hover:bg-gray-600 hover:bg-opacity-25 cursor-pointer">
          <TitleWithLine title={`Problem ${idx}`}/>
          <p className="text-md text-justify w-full leading-loose">{statement}</p>
        <div className="my-2">
          {/* <div className="italic py-2">For</div> */}
          <div className="flex gap-2 my-6 flex-wrap">
            {forList.map((item, index) => {
              if (item === 1) {
                return (
                  <GradientButton key={index} noHover>
                    1st <span className="inline-block"> Year</span>
                  </GradientButton>
                );
              } else if (item === 2) {
                return (
                  <GradientButton key={index} noHover>
                    2nd <span className="inline-block"> Year</span>
                  </GradientButton>
                );
              } else if (item === 3) {
                return (
                  <GradientButton key={index} noHover>
                    3rd <span className="inline-block"> Year</span>
                  </GradientButton>
                );
              } else {
                return (
                  <GradientButton key={index} noHover>
                    {item}th{" "}
                    <span className="inline-block"> Year</span>
                  </GradientButton>
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
            <CalendarIconAndDate date={endDate} />
          </div>
          <div className="font-semibold">
            <SICProbStatusIndicator isExpired={isExpired} />
          </div>
        </div>
      </Glasscard>
    </Link>
  );
};
