import EventCard from "./EventCard";
import GlassTitleHolder from "../GlassTitleHolder";
import LinkButton from "../LinkButton";

const Events = (props) => {
  let customStyleForViewAllEventsButton = {
    color: "#27C2C7"
  };
  return (
    <div className="flex flex-col mb-6 md:flex-row gap-6">
      <div className="flex flex-col gap-3">
        <GlassTitleHolder title="E V E N T S" titleType="events"/>
        <LinkButton
          styles="px-4 py-2 bg-white"
          customCSS={customStyleForViewAllEventsButton}
        >
          View all <span className="font-semibold">Events</span>
        </LinkButton>
        <LinkButton styles="px-4 py-2 border-2 border-white">
          Suggest an <span className="font-semibold">Idea</span>
        </LinkButton>
      </div>
      {/* Event Cards holder*/}
      <div className="flex flex-col md:flex-row overflow-x-auto overflow-y-hidden gap-6 md:pb-4">
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
