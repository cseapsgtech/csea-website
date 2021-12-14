import EventCard from "./EventCard";
import GlassTitleHolder from "../GlassTitleHolder";
import SmallButton from "../SmallButton";

const Events = (props) => {
  let customStyleForViewAllEventsButton = {
    color: "#27C2C7"
  };
  return (
    <div className="flex flex-col md:flex-row gap-4 md:my-4">
      <div className="flex flex-col gap-2">
        <GlassTitleHolder title="E V E N T S" />
        <SmallButton
          styles="bg-white"
          customCSS={customStyleForViewAllEventsButton}
        >
          View all <span className="font-semibold">Events</span>
        </SmallButton>
        <SmallButton styles="border-2 border-white">
          Suggest an <span className="font-semibold">Idea</span>
        </SmallButton>
      </div>
      {/* Event Cards holder*/}
      <div className="flex flex-col md:flex-row overflow-x-auto overflow-y-hidden gap-4 md:pb-4">
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
    </div>
  );
};

export default Events;
