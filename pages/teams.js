import TopBar from "../components/TopBar";
import Head from "next/head";
import Glasscard from "../components/Glasscard";
import TeamCard from "../components/Team/TeamCard";
import BackButton from "../components/BackButton";
import { useRouter } from "next/router";
// import { dehydrate, QueryClient, useQuery } from "react-query";
import { getTeamMembers } from "./api/teams";

const Teams = ({ teamMembers }) => {
  const router = useRouter();

  // const { data } = useQuery(
  //   "teams",
  //   async () => {
  //     const response = await fetch("/api/teams");
  //     const jsonresponse = await response.json();
  //     return jsonresponse;
  //   },
  //   {
  //     keepPreviousData: true,
  //     refetchOnMount: false,
  //     refetchOnWindowFocus: false,
  //   }
  // );

  return (
    <div>
      <Head>
        <title>Teams - CSEA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopBar />
      <BackButton router={router} />
      <Glasscard styles="flex-1 w-full mb-6">
        <div className="flex flex-col items-center justify-center h-full p-4">
          <div className="text-2xl md:text-3xl text-center">Our Team</div>
        </div>
      </Glasscard>
      {/* Displaying all team members */}
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 mb-6">
        {teamMembers
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

// Incremental static regeneration
export const getStaticProps = async () => {
  const teamMembers = await getTeamMembers();

  return {
    props: {
      teamMembers: JSON.parse(JSON.stringify(teamMembers)),
    },
    revalidate: 120,
  };
};

export default Teams;
