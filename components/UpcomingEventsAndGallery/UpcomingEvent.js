import LinkButton from "../LinkButton";
import CalendarIconAndDate from "../CalendarIconAndDate";

const UpcomingEvent = (props) => {
  return (
    <div className="py-0 flex flex-col-reverse md:flex-row">
      <div className="flex items-start justify-start flex-col py-4 md:flex-grow md:py-0 md:pr-8">
        <span
          className="italic line-clamp-1 md:w-56 text-shadow"
          title={props.title}
        >
          {props.title}
        </span>
        <CalendarIconAndDate date={props.date} styles="mt-3 mb-4" />
        <LinkButton
          href="/sic"
          styles="py-2 px-4 w-max rounded-lg grad-button"
        >
          Check out <span className="font-semibold">EVENT!</span>
        </LinkButton>
      </div>
      {/* Image holder */}
      <div className="bg-gray-300 h-60 w-full rounded-md md:h-28 md:w-28 shadow-xl"></div>
    </div>
  );
};

export default UpcomingEvent;

// events
// problem
// blog
// news
// teams
