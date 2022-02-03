import TitleWithLine from "../TitleWithLine";
import EstimatedReadingTime from "../EstimatedReadingTime";
import LinkButton from "../LinkButton";

const NewsCard = (props) => {
  return (
    <div
      className="card-border rounded-lg px-6 py-8 md:p-6 flex flex-col sm:min-w-max transition-all duration-300"
    >
      <TitleWithLine title={props.title} styles="sm:w-96" />
      <div className="flex flex-col sm:flex-row justify-center">
        {/* Image holder */}
        <div className="bg-gray-300 rounded-md h-60 w-full sm:h-28 sm:w-28 shadow-xl sm:mt-2"></div>
        {/* Info holder */}
        <div
          className="flex-grow pt-4 sm:pt-0 sm:w-96 sm:pl-4 line-clamp-5 sm:line-clamp-3 text-justify leading-loose antialiased text-shadow"
          style={{ height: "fit-content" }}
        >
          {props.content}
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between">
        <EstimatedReadingTime readingTime={props.readingTime} />
        <LinkButton
          href="/sic"
          styles="py-2 px-4 w-max rounded-lg grad-button"
        >
          Read the <span className="font-semibold">full story</span>
        </LinkButton>
      </div>
    </div>
  );
};

export default NewsCard;

