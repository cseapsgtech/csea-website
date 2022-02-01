import TopBar from "../../../../components/TopBar";
import Head from "next/head";
import Glasscard from "../../../../components/Glasscard";
import Image from "next/image";
import CalendarIconAndDate from "../../../../components/CalendarIconAndDate";
import LinkButton from "../../../../components/LinkButton";
import ForList from "../../../../components/SIC page/ForList";
import TitleWithLine from "../../../../components/TitleWithLine";
import BackButton from "../../../../components/BackButton";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { getEventById } from "../../../api/events/year/[academicYear]/[id]";

const Events = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: event } = useQuery(
    ["event", id],
    async () => {
      const response = await fetch(`/api/events/${id}`);
      const jsonresponse = await response.json();
      return jsonresponse;
    },
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const getDate = (seconds) => {
    const date = new Date(seconds * 1000); // conversion from seconds to date
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const isExpired = (seconds) => {
    const date = new Date(seconds * 1000); // conversion from seconds to date

    return date < new Date();
  };

  return (
    <div>
      <Head>
        <title>{`${event.name} - Event details`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopBar />
      <BackButton router={router} />
      <Glasscard styles="flex-1 w-full mb-6">
        <div className="flex flex-col items-center justify-center h-full p-4">
          <div className="text-2xl md:text-3xl text-center">{event.name}</div>
        </div>
      </Glasscard>
      {/* Displaying event details */}
      <div className="flex flex-col items-center md:items-start md:flex-row gap-4 mb-6 w-full">
        {/* Image holder */}
        <div className="bg-gray-300 rounded-md w-full sm:w-8/12 md:w-6/12 md:max-w-6xl shadow-xl overflow-hidden mt-2">
          {event.poster_link && (
            <Image
              src={event.poster_link}
              width="100%"
              height="100%"
              alt={event.name + " poster"}
              layout="responsive"
              objectFit="cover"
            />
          )}
        </div>
        <div className="w-full md:w-6/12 md:max-w-full flex-grow md:px-4">
          {/* Info holder */}
          <div className="text-justify leading-loose antialiased text-shadow text-md xl:text-lg xl:leading-loose">
            {event.desc}
          </div>
          {/* Participant list */}
          <div className="mt-2">
            <ForList forList={event.participants} buttonType="outline" />
          </div>
          {/* Convenors */}
          <div className="my-10 flex flex-col gap-2">
            <TitleWithLine title="Convenors" styles="font-semibold" />
            <div className="flex flex-col gap-4">
              {event.convenors.map((convenor, index) => {
                return (
                  <p key={index} className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="white"
                      className="bi bi-person-fill"
                      viewBox="0 0 18 18"
                    >
                      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    {convenor}
                  </p>
                );
              })}
            </div>
          </div>
          {/* Date */}
          <CalendarIconAndDate date={getDate(event.date.seconds)} />
          {/* Registration link */}
          {!isExpired(event.date.seconds) && (
            <LinkButton
              href={event.registration_link}
              styles="py-2 px-4 mt-4 w-max rounded-lg grad-button"
              externalLink
            >
              Register for <span className="font-semibold">EVENT!</span>
            </LinkButton>
          )}
        </div>
      </div>
    </div>
  );
};

// Here server side rendering is used because for each ID, the specific event associated with that ID is shown
export const getServerSideProps = async (context) => {
  const { academicYear, id } = context.params;

  // code for prefetching data from server using react-query
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["event", id], async () => {
    const response = await getEventById(id, academicYear);

    return response;
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };
};

export default Events;
