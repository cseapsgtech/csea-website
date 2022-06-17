import Glasscard from "../Glasscard.js";
import TitleWithLine from "../TitleWithLine.js";
import SICProbStatusIndicator from "./SICProbStatusIndicator.js";
import CalendarIconAndDate from "../CalendarIconAndDate.js";
import ForList from "./ForList";
import LinkButton from "../LinkButton.js";

const ProblemStatementCard = ({
  title,
  statement,
  endDate,
  isExpired,
  forList,
  link,
}) => {
  return (
    <Glasscard styles="shadow-lg h-fit transition-all duration-300">
      <TitleWithLine title={title} isLargeText />
      <p className="text-md text-justify w-full line-clamp-4 md:line-clamp-5 leading-loose">{statement}</p>
      <LinkButton
        href={link}
        styles="text-xsm md:text-sm mt-4 p-2.5 border-2 border-white w-max hover:bg-white hover:text-black transition-all duration-300"
        externalLink
      >
        View full problem statement
      </LinkButton>
      <div className="flex flex-col gap-4">
      <div className="mt-4">
        <ForList forList={forList} />
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:gap-0 md:space-x-4 md:items-center">
        <div
          className={`flex space-x-2 ${
            isExpired ? "opacity-50" : "opacity-100"
          }`}
        >
          <CalendarIconAndDate date={endDate} />
        </div>
        <div className="font-semibold">
          <SICProbStatusIndicator isExpired={isExpired} />
        </div>
      </div>
      </div>
    </Glasscard>
  );
};

export default ProblemStatementCard;
