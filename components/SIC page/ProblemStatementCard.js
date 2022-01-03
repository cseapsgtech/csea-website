import Glasscard from "../Glasscard.js";
import TitleWithLine from "../TitleWithLine.js";
import SICProbStatusIndicator from "./SICProbStatusIndicator.js";
import CalendarIconAndDate from "../CalendarIconAndDate.js";
import GradientButton from "../GradientButton.js";

const ProblemStatementCard = ({
  idx = 0,
  statement = `Problem statement goes here - Lorem ipsum dolor sit amet,
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
    exercitation ullamco laboris.`,
  endDate = "31st Feb, 2021",
  isExpired = false,
  forList = [1, 2, 3, 4]
}) => {
  return (
    <Glasscard styles="shadow-lg hover:bg-gray-600 hover:bg-opacity-25 cursor-pointer">
      <TitleWithLine title={`Problem ${idx}`} />
      <p className="text-md text-justify w-full leading-loose">{statement}</p>
      <div className="my-2">
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
                  {item}th <span className="inline-block"> Year</span>
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
  );
};

export default ProblemStatementCard;
