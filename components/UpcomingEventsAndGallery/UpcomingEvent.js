import LinkButton from "../LinkButton";
import CalendarIconAndDate from "../CalendarIconAndDate";
import Image from "next/image";

const UpcomingEvent = (props) => {
  return (
    <div className="flex-col py-0 flex xsm:flex-row">
      {/* Image holder */}
      <div className="mb-4 xsm:block bg-gray-300 rounded-md w-full xsm:h-28 xsm:w-28 overflow-hidden">
        {props.imageSrc && (
          <Image
            src={props.imageSrc}
            width="100%"
            height="100%"
            alt={props.title + " poster"}
            layout="responsive"
            objectFit="cover"
          />
        )}
      </div>
      <div className="flex items-start justify-start flex-col md:flex-grow xsm:pl-4">
        <span
          className="italic line-clamp-1 md:w-56 text-shadow"
          title={props.title}
        >
          {props.title}
        </span>
        <CalendarIconAndDate date={props.date} styles="mt-3 mb-4" />
        <LinkButton href={props.href} styles="py-2 px-4 w-max rounded-lg grad-button">
          Check out <span className="font-semibold">EVENT!</span>
        </LinkButton>
      </div>
    </div>
  );
};

export default UpcomingEvent;

// events
// problem
// blog
// news
// teams
