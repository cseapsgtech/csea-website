import TopBar from "../../../../components/TopBar";
import Head from "next/head";
import Glasscard from "../../../../components/Glasscard";
import EventCard from "../../../../components/Events/EventCard";
import TitleWithLine from "../../../../components/TitleWithLine";
import BackButton from "../../../../components/BackButton";
import LinkButton from "../../../../components/LinkButton";
import Status from "../../../../components/Status";
import { useRouter } from "next/router";
import { getCompletedEvents } from "../../../api/events/year/[academicYear]/completed";
import { getUpcomingEvents } from "../../../api/events/year/[academicYear]/upcoming";
import { getCurrentAcademicYear } from "../../../api/events/year/currentAcademicYear";
import { getArchives } from "../../../api/events/archives";

const Events = ({ allEvents }) => {
  const router = useRouter();
  const { academicYear } = router.query;

  const getDate = (seconds) => {
    const date = new Date(seconds * 1000); // conversion from seconds to date
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <div>
      <Head>
        <title>{`${academicYear} Events - CSEA`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopBar />
      <BackButton router={router} />
      <Glasscard styles="flex-1 w-full mb-6">
        <div className="flex flex-col items-center justify-center h-full p-4">
          <div className="text-2xl md:text-3xl text-center">{`${academicYear} Events`}</div>
        </div>
      </Glasscard>

      {/* Displaying upcoming events */}
      {allEvents.currentAcademicYear === academicYear && (
        <>
          <TitleWithLine title="Upcoming events" styles="text-xl font-bold" />
          {allEvents.upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 my-6 place-items-start">
              {allEvents.upcomingEvents
                .sort((a, b) => {
                  // Turn seconds into dates, and then subtract them
                  // to get a value that is either negative, positive, or zero.
                  return (
                    new Date(b.date.seconds * 1000) -
                    new Date(a.date.seconds * 1000)
                  );
                })
                .map((event) => {
                  return (
                    <EventCard
                      width="w-full"
                      infoHolderWidth="sm:w-min"
                      key={event.id}
                      title={event.name}
                      date={getDate(event.date.seconds)}
                      content={event.desc}
                      imageSrc={event.poster_link}
                      forList={event.participants}
                      href={`/events/year/${academicYear}/${event.id}`}
                    />
                  );
                })}
            </div>
          ) : (
            <Status styles="border-yellow-500 mb-6">
              No upcoming events :
            </Status>
          )}
        </>
      )}
      {/* Displaying completed events */}
      <TitleWithLine title="Completed events" styles="text-xl font-bold" />
      {allEvents.completedEvents.length > 0 ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 my-6 place-items-start">
          {allEvents.completedEvents
            .sort((a, b) => {
              // Turn seconds into dates, and then subtract them
              // to get a value that is either negative, positive, or zero.
              return (
                new Date(b.date.seconds * 1000) -
                new Date(a.date.seconds * 1000)
              );
            })
            .map((event) => {
              return (
                <EventCard
                  width="w-full"
                  infoHolderWidth="sm:w-min"
                  key={event.id}
                  title={event.name}
                  date={getDate(event.date.seconds)}
                  content={event.desc}
                  imageSrc={event.poster_link}
                  forList={event.participants}
                  href={`/events/year/${academicYear}/${event.id}`}
                />
              );
            })}
        </div>
      ) : (
        <Status styles="border-yellow-500 mb-6">No events found!</Status>
      )}
      {/* Archives button */}
      <div className="w-full flex items-center">
        <LinkButton
          href="/events/archives"
          styles="px-4 py-2 bg-white mb-6 grad-button m-auto"
        >
          Go to <span className="font-semibold">archives</span>
        </LinkButton>
      </div>
    </div>
  );
};


// Incremental Static Regeneration
export const getStaticProps = async (context) => {
  // get current academic year
  const currentAcademicYear = await getCurrentAcademicYear();

  const completedEvents = await getCompletedEvents(
    currentAcademicYear.academic_year
  );
  const upcomingEvents = await getUpcomingEvents(
    currentAcademicYear.academic_year
  );

  const allEvents = {
    currentAcademicYear: currentAcademicYear.academic_year,
    completedEvents,
    upcomingEvents,
  };

  return {
    props: {
      allEvents: JSON.parse(JSON.stringify(allEvents)),
    },
    revalidate: 120, // revalidate after 2 minutes
  };
};

export const getStaticPaths = async () => {
  // get all academic years
  const years = await getArchives();

  const paths = years.map(year => ({
    params: { academicYear: year}
  }))

  return{
    paths,
    fallback: false
  }
}

export default Events;
