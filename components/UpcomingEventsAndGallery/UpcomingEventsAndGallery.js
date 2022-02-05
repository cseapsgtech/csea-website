import Glasscard from "../Glasscard";
import UpcomingEvent from "./UpcomingEvent";
import TitleWithLine from "../TitleWithLine";
import Status from "../Status";
import Gallery from "./Gallery";

const UpcomingEventsAndGallery = ({
  upcomingEvents,
  gallery,
  currentAcademicYear,
}) => {
  const getDate = (seconds) => {
    const date = new Date(seconds * 1000); // conversion from seconds to date
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <div className="flex flex-col gap-6 mb-6 md:flex-row w-full">
      {/*Upcoming events*/}
      <Glasscard styles="w-full md:w-max">
        <TitleWithLine title="Upcoming events" />
        {upcomingEvents.length > 0 ? (
          <div className="mb-2 xsm:mb-0 overflow-auto flex flex-col gap-y-6 xsm:pr-3 mt-4 xsm:max-h-128">
            {upcomingEvents
              .sort((a, b) => {
                // Turn seconds into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return (
                  new Date(b.date.seconds * 1000) -
                  new Date(a.date.seconds * 1000)
                );
              })
              .map((uc) => {
                return (
                  <UpcomingEvent
                    key={uc.id}
                    title={uc.name}
                    date={getDate(uc.date.seconds)}
                    imageSrc={uc.poster_link}
                    href={`/events/year/${currentAcademicYear}/${uc.id}`}
                  />
                );
              })}
          </div>
        ) : (
          <Status styles="w-full md:w-72 px-8 border-yellow-500">
            No upcoming events!
          </Status>
        )}
      </Glasscard>

      {/*Gallery*/}
      <Glasscard styles="w-full">
        <TitleWithLine title="Gallery" />
        <Gallery gallery={gallery} />
      </Glasscard>
    </div>
  );
};

export default UpcomingEventsAndGallery;
