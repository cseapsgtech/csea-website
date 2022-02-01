import EventCard from "./EventCard";
import GlassTitleHolder from "../GlassTitleHolder";
import LinkButton from "../LinkButton";
import Status from "../Status";

const Events = ({ events, currentAcademicYear }) => {
  let customStyleForViewAllEventsButton = {
    color: "#27C2C7",
  };

  const getDate = (seconds) => {
    const date = new Date(seconds * 1000); // conversion from seconds to date
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <div className="flex flex-col mb-6 md:flex-row gap-6">
      <div className="flex flex-col gap-3">
        <GlassTitleHolder title="E V E N T S" titleType="events" />
        <LinkButton
          href={`/events/year/${currentAcademicYear}`}
          styles="px-4 py-2 bg-white w-full"
          customCSS={customStyleForViewAllEventsButton}
        >
          View all <span className="font-semibold">Events</span>
        </LinkButton>
        <LinkButton
          href="https://forms.gle/LhP3Cza4xS3hAuLV7"
          styles="px-4 py-2 border-2 border-white w-full"
          externalLink
        >
          Suggest an <span className="font-semibold">Idea</span>
        </LinkButton>
      </div>
      {/* Event Cards holder*/}
      {events.length > 0 ? (
        <div className="flex flex-col md:flex-row overflow-x-auto overflow-y-hidden gap-6 md:pb-4">
          {events
            .sort((a, b) => {
              // Turn seconds into dates, and then subtract them
              // to get a value that is either negative, positive, or zero.
              return (
                new Date(b.date.seconds * 1000) -
                new Date(a.date.seconds * 1000)
              );
            })
            .slice(0, 5)
            .map((event) => {
              return (
                <EventCard
                  key={event.id}
                  title={event.name}
                  date={getDate(event.date.seconds)}
                  content={event.desc}
                  imageSrc={event.poster_link}
                  forList={event.participants}
                  href={`/events/year/${currentAcademicYear}/${event.id}`}
                />
              );
            })}
        </div>
      ) : (
        <Status styles="border-yellow-500">No events found!</Status>
      )}
    </div>
  );
};

export default Events;
