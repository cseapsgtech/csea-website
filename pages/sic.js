import Head from "next/head";
import Glasscard from "../components/Glasscard.js";
import TopBar from "../components/TopBar.js";
import BackButton from "../components/BackButton.js";
import { useRouter } from "next/router";
import ProblemStatementCard from "../components/SIC page/ProblemStatementCard.js";
import { dehydrate, QueryClient, useQuery } from "react-query";

const SIC = () => {

  const router = useRouter();
  
  const { data: probStatements } = useQuery(
    "sic",
    async () => {
      const response = await fetch("/api/sic");
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
        <title>SIC - CSEA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopBar />
      <BackButton router={router} />
      <Glasscard styles="flex-1 w-full mb-6">
        <div className="flex flex-col items-center justify-center h-full p-4">
          <div className="text-2xl md:text-3xl text-center border-b-2 border-white pb-4">
            Student Interaction Corner
          </div>
          <p className="mt-6 text-justify leading-loose text-shadow">
            We, Student Interaction Corner aim to increase the Senior - Junior
            interaction by conducting frequent meet ups and discuss on-demand
            topics to familiarise with various aspects. We will be speaking
            about wide range of topics and also collect periodic feedbacks to
            constantly improve the quality of content delivered. Also, this acts
            as a platform where juniors can get a chance to interact with like
            minded seniors and also get their valuable suggestions and
            experience.
          </p>
          {/* <LinkButton
            href="/"
            styles="px-4 py-2 border-white border-2 rounded-lg mt-5 md:hover:bg-gray-700 text-shadow"
          >
            <span className="font-semibold">KNOW MORE</span> about us!
          </LinkButton> */}
        </div>
      </Glasscard>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 mb-6 place-items-start">
        {probStatements
          .sort((a, b) => {
            // Turn seconds into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return (
              new Date(b.end_date.seconds * 1000) -
              new Date(a.end_date.seconds * 1000)
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

  // code for prefetching data from server using react-query
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("sic", async () => {
    const response = await fetch(`${httpProtocol}://${host}/api/sic`);
    const jsonresponse = await response.json();
    return jsonresponse;
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };

  // // alternative code
  // const res = await fetch(`${httpProtocol}://${host}/api/sic`);
  // const probStatements = await res.json();

  // if (!probStatements) {
  //   return {
  //     // The notFound boolean allows the page to return a 404 status and 404 Page
  //     notFound: true,
  //   };
  // }

  // return {
  //   props: {
  //     probStatements,
  //   },
  // };
};

export default SIC;
