import TitleWithLine from "../TitleWithLine";
import CalendarIconAndDate from "../CalendarIconAndDate";
import LinkButton from "../LinkButton";
import ForList from "../SIC page/ForList";
import Image from "next/image";

const EventCard = (props) => {
  return (
    <div className={`card-border rounded-lg px-6 py-8 md:p-6 flex flex-col transition-all duration-300 ${props.width}`}>
      <TitleWithLine title={props.title} styles="sm:w-96 uppercase text-lg md:text-base" />
      <div className="flex flex-col sm:flex-row">
        {/* Image holder */}
        <div className="bg-gray-300 rounded-md w-full mt-2 sm:h-28 sm:w-28 shadow-xl overflow-hidden">
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
        {/* Info holder */}
        <div
          className={`${props.infoHolderWidth} flex-grow pt-4 sm:pt-0 sm:pl-4 line-clamp-5 sm:line-clamp-3 text-justify leading-loose antialiased text-shadow`}
          style={{ height: "fit-content" }}
          title={props.content}
        >
          {props.content}
        </div>
      </div>
      {/* Participant list */}
      <div className="mt-2">
        <ForList forList={props.forList} buttonType="outline" />
      </div>
      <div className="mt-2 flex flex-col gap-4 md:gap-0 md:flex-row md:justify-between">
        <CalendarIconAndDate date={props.date} />
        <LinkButton href={props.href} styles="py-2 px-4 w-max rounded-lg grad-button">
          Check out <span className="font-semibold">EVENT!</span>
        </LinkButton>
      </div>
    </div>
  );
};

export default EventCard;
