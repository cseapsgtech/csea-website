import TitleWithLine from "../TitleWithLine";
import EstimatedReadingTime from "../EstimatedReadingTime";
import LinkButton from "../LinkButton";

const NewsCard = (props) => {
  return (
    <div
      className="card-border rounded-lg px-6 py-8 md:p-6 flex flex-col md:min-w-max"
    >
      <TitleWithLine title={props.title} styles="md:w-96" />
      <div className="flex flex-col md:flex-row justify-center">
        {/* Image holder */}
        <div className="bg-gray-300 rounded-md h-60 w-full md:h-28 md:w-28 shadow-xl md:mt-2"></div>
        {/* Info holder */}
        <div
          className="pt-4 md:pt-0 md:w-72 md:pl-4 line-clamp-5 text-justify leading-loose antialiased text-shadow"
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

