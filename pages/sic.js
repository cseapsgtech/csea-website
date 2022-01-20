import Head from "next/head";
import Glasscard from "../components/Glasscard.js";
import TopBar from "../components/TopBar.js";
import LinkButton from "../components/LinkButton.js";
import ProblemStatementCard from "../components/SIC page/ProblemStatementCard.js";

const SIC = ({ probstatements }) => {
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
        <title>SIC - CSEA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopBar />
      <Glasscard styles="flex-1 w-full mb-6">
        <div className="flex flex-col items-center justify-center h-full p-4">
          <div className="text-xl md:text-3xl text-center">
            Student Interaction Corner
          </div>
          <LinkButton
            href="/"
            styles="px-4 py-2 border-white border-2 rounded-lg mt-5 md:hover:bg-gray-700 text-shadow"
          >
            <span className="font-semibold">KNOW MORE</span> about us!
          </LinkButton>
        </div>
      </Glasscard>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 mb-6 place-items-start">
        {probstatements
          .sort((a, b) => {
            // Turn seconds into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return (
              new Date(b.end_date.seconds * 1000) - new Date(a.end_date.seconds * 1000)
            );
          })
          .map((ps) => {
            return (
              <ProblemStatementCard
                key={ps.id}
                statement={ps.statement}
                endDate={getDate(ps.end_date.seconds)}
                isExpired={isExpired(ps.end_date.seconds)}
                forList={ps.participants}
              />
            );
          })}
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

  const res = await fetch(`${httpProtocol}://${host}/api/sic`);
  const probstatements = await res.json();

  if (!probstatements) {
    return {
      // The notFound boolean allows the page to return a 404 status and 404 Page
      notFound: true,
    };
  }

  return {
    props: {
      probstatements,
    },
    // Used for ISR
    // revalidate: 100, // In seconds
  };
};

export default SIC;
