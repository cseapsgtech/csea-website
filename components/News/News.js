import NewsCard from "./NewsCard";
import GlassTitleHolder from "../GlassTitleHolder";
import SmallButton from "../SmallButton";

const News = (props) => {
  let customStyleForViewAllEventsButton = {
    color: "#27C2C7"
  };
  return (
    <div className="flex flex-col-reverse mb-6 md:flex-row gap-6">
      {/* News Cards holder*/}
      <div className="flex flex-col md:flex-row overflow-x-auto overflow-y-hidden gap-6 md:pb-4">
        <NewsCard
          title="Story 1 with a very long event name that will be cut off using ellipsis"
          readingTime="5"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet."
        />
        <NewsCard
          title="Story 2"
          readingTime="5"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet."
        />
        <NewsCard
          title="Story 3"
          readingTime="5"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet."
        />
        <NewsCard
          title="Story 4"
          readingTime="5"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet."
        />
        <NewsCard
          title="Story 5"
          readingTime="5"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet."
        />
      </div>
      <div className="flex flex-col gap-3">
        <GlassTitleHolder title="N E W S" titleType="news" />
        <SmallButton
          styles="bg-white"
          customCSS={customStyleForViewAllEventsButton}
        >
          View all <span className="font-semibold">News</span>
        </SmallButton>
      </div>
    </div>
  );
};

export default News;
