import TitleWithLine from "../TitleWithLine";
import EstimatedReadingTime from "../EstimatedReadingTime";
import GradientButton from "../GradientButton";

const NewsCard = (props) => {
  return (
    <div
      className="cardBorder rounded-lg px-6 py-8 md:p-6 flex flex-col md:min-w-max"
    >
      <TitleWithLine title={props.title} styles="md:w-96" />
      <div className="flex flex-col md:flex-row justify-center">
        {/* Image holder */}
        <div className="bg-gray-300 rounded-md h-60 w-full md:h-28 md:w-28 shadow-xl md:mt-2"></div>
        {/* Info holder */}
        <div
          className="pt-4 md:pt-0 md:w-72 md:pl-4 line-clamp-5 text-justify leading-loose antialiased textShadow"
          style={{ height: "fit-content" }}
        >
          {props.content}
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between">
        <EstimatedReadingTime readingTime={props.readingTime} />
        <GradientButton>
          Read the <span className="font-semibold">full story</span>
        </GradientButton>
      </div>
    </div>
  );
};

export default NewsCard;

