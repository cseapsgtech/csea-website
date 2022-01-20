import TitleWithLine from "../TitleWithLine";
import CalendarIconAndDate from "../CalendarIconAndDate";
import LinkButton from "../LinkButton";
import ForList from "../SIC page/ForList";
import Image from "next/image";

const EventCard = (props) => {
  return (
    <div className="card-border rounded-lg px-6 py-8 md:p-6 flex flex-col md:min-w-max">
      <TitleWithLine title={props.title} styles="md:w-96" />
      <div className="flex flex-col md:flex-row">
        {/* Image holder */}
        <div className="bg-gray-300 rounded-md w-full mt-2 md:h-28 md:w-28 shadow-xl overflow-hidden">
          <Image
            src={props.imageSrc}
            width="100%"
            height="100%"
            alt={props.title + " poster"}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        {/* Info holder */}
        <div
          className="flex-grow pt-4 md:pt-0 md:w-72 md:pl-4 line-clamp-5 md:line-clamp-3 text-justify leading-loose antialiased text-shadow"
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
        <LinkButton href="/sic" styles="py-2 px-4 w-max rounded-lg grad-button">
          Check out <span className="font-semibold">EVENT!</span>
        </LinkButton>
      </div>
    </div>
  );
};

export default EventCard;
