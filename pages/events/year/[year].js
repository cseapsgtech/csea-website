import TopBar from "../../../components/TopBar";
import Head from "next/head";
import Glasscard from "../../../components/Glasscard";
import EventCard from "../../../components/Events/EventCard";
import TitleWithLine from "../../../components/TitleWithLine";
import BackButton from "../../../components/BackButton";
import Status from "../../../components/Status";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "react-query";

const Events = () => {
  const router = useRouter();
  const { year } = router.query;

  const { data, error } = useQuery(
    ["all-events", year],
    async () => {
      // fetching all completed events
      const completedEvents = await fetch(`/api/events/year/${year}/completed`);

      const completedEventsJson = await completedEvents.json();

      // fetching all upcoming events
      const upcomingEvents = await fetch(`/api/events/year/${year}/upcoming`);

      const upcomingEventsJson = await upcomingEvents.json();

      const allEvents = {
        completedEvents: completedEventsJson,
        upcomingEvents: upcomingEventsJson,
      };
      return allEvents;
    },
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  console.log(error);

  const getDate = (seconds) => {
    const date = new Date(seconds * 1000); // conversion from seconds to date
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <div>
      <Head>
        <title>{`${year} Events - CSEA`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopBar />
      <BackButton router={router} />
      <Glasscard styles="flex-1 w-full mb-6">
        <div className="flex flex-col items-center justify-center h-full p-4">
          <div className="text-2xl md:text-3xl text-center">{`${year} Events`}</div>
        </div>
      </Glasscard>
      {/* Displaying upcoming events */}
      <TitleWithLine title="Upcoming events" styles="text-xl font-bold" />
      {data.upcomingEvents.length > 0 ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 my-6">
          {data.upcomingEvents
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
                  key={event.id}
                  title={event.name}
                  date={getDate(event.date.seconds)}
                  content={event.desc}
                  imageSrc={event.poster_link}
                  forList={event.participants}
                  href={`/events/${event.id}`}
                />
              );
            })}
        </div>
      ) : (
        <Status>No upcoming events :(</Status>
      )}
      {/* Displaying completed events */}
      <TitleWithLine title="Completed events" styles="text-xl font-bold" />
      {data.completedEvents.length > 0 ? <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 my-6">
        {data.completedEvents
          .sort((a, b) => {
            // Turn seconds into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return (
              new Date(b.date.seconds * 1000) - new Date(a.date.seconds * 1000)
            );
          })
          .map((event) => {
            return (
              <EventCard
                key={event.id}
                title={event.name}
                date={getDate(event.date.seconds)}
                content={event.desc}
                imageSrc={event.poster_link}
                forList={event.participants}
              />
            );
          })}
      </div> : <Status>No events found!</Status>}
    </div>
  );
};

export const getServerSideProps = async (context) => {
  let year = context.params.year;

  let httpProtocol;

  if (context.req.headers.host.includes("localhost")) {
    httpProtocol = "http";
  } else {
    httpProtocol = "https";
  }

  // context.req.headers.host provides the host name
  let host = context.req.headers.host;

  // code for prefetching data from server using react-query
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["all-events", year], async () => {
    // fetching all completed events
    const completedEvents = await fetch(
      `${httpProtocol}://${host}/api/events/year/${year}/completed`
    );

    const completedEventsJson = await completedEvents.json();

    // fetching all upcoming events
    const upcomingEvents = await fetch(
      `${httpProtocol}://${host}/api/events/year/${year}/upcoming`
    );

    const upcomingEventsJson = await upcomingEvents.json();

    const allEvents = {
      completedEvents: completedEventsJson,
      upcomingEvents: upcomingEventsJson,
    };
    return allEvents;
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };

  // // alternative code
  // const res = await fetch(`${httpProtocol}://${host}/api/events`);
  // const events = await res.json();

  // if (!events) {
  //   return {
  //     // The notFound boolean allows the page to return a 404 status and 404 Page
  //     notFound: true,
  //   };
  // }

  // return {
  //   props: {
  //     events,
  //   },
  // };
};

export default Events;
