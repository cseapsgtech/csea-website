import TopBar from "../components/TopBar";
import Head from "next/head";
import Glasscard from "../components/Glasscard";
import TeamCard from "../components/Team/TeamCard";
import { dehydrate, QueryClient, useQuery } from "react-query";

const Teams = () => {
  const { data } = useQuery(
    "teams",
    async () => {
      const response = await fetch("/api/teams");
      const jsonresponse = await response.json();
      return jsonresponse;
    },
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div>
      <Head>
        <title>Teams - CSEA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopBar />
      <Glasscard styles="flex-1 w-full mb-6">
        <div className="flex flex-col items-center justify-center h-full p-4">
          <div className="text-2xl md:text-3xl text-center">Our Team</div>
        </div>
      </Glasscard>
      {/* Displaying all team members */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 mb-6">
        {data
          .sort((a, b) => a.index - b.index)
          .map((member, index) => {
            return (
              <TeamCard
                key={index}
                memberName={member.name}
                academicTitle={member.academic_title}
                imageSrc={member.picture_link}
                designation={member.designation}
                githubLink={member.github}
                linkedinLink={member.linkedin}
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

  await queryClient.prefetchQuery("teams", async () => {
    const response = await fetch(`${httpProtocol}://${host}/api/teams`);
    const jsonresponse = await response.json();
    return jsonresponse;
  });

  return {
    props: {
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
    },
  };

  // // alternative code

  // const res = await fetch(`${httpProtocol}://${host}/api/teams`);
  // const teamMembers = await res.json();

  // if (!teamMembers) {
  //   return {
  //     // The notFound boolean allows the page to return a 404 status and 404 Page
  //     notFound: true,
  //   };
  // }

  // return {
  //   props: {
  //     teamMembers,
  //   },
  // };
};

export default Teams;
