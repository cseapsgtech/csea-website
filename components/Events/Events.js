import EventCard from "./EventCard";
import GlassTitleHolder from "../GlassTitleHolder";

const Events = (props) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:my-4 pb-4 overflow-x-auto overflow-y-hidden">
      <div className="flex flex-col">
        <GlassTitleHolder title="E V E N T S" />
      </div>
      <EventCard
        title="Event 1 with a very long event name that will be cut off using ellipsis"
        date="23/10/2021"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet."
      />
      <EventCard
        title="Event 2"
        date="23/10/2021"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet."
      />
      <EventCard
        title="Event 3"
        date="23/10/2021"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet."
      />
      <EventCard
        title="Event 4"
        date="23/10/2021"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet."
      />
      <EventCard
        title="Event 5"
        date="23/10/2021"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet."
      />
    </div>
  );
};

export default Events;
