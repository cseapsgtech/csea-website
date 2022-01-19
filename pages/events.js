import TopBar from "../components/TopBar";
import Head from "next/head";
import Glasscard from "../components/Glasscard";

const Events = ({ events }) => {

  return (
    <div>
      <Head>
        <title>Events - CSEA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopBar />
      <Glasscard styles="flex-1 w-full mb-6">
        <div className="flex flex-col items-center justify-center h-full p-4">
          <div className="text-xl md:text-3xl text-center">Events</div>
        </div>
      </Glasscard>
      {/* Displaying all events */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 mb-6">
        Events are shown here...
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  let httpProtocol;

  if (context.req.headers.host.includes("localhost")) {
    httpProtocol = "http";
  } else {
    httpProtocol = "https";
  }

  // context.req.headers.host provides the host name
  let host = context.req.headers.host;

  const res = await fetch(`${httpProtocol}://${host}/api/events`);
  const events = await res.json();

  if (!events) {
    return {
      // The notFound boolean allows the page to return a 404 status and 404 Page
      notFound: true,
    };
  }

  return {
    props: {
      events,
    },
    // Used for ISR
    // revalidate: 100, // In seconds
  };
};

export default Events;
