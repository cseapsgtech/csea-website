import TitleWithLine from "../TitleWithLine";
import LinkButton from "../LinkButton";
import TeamCard from "./TeamCard";
import Loading from "../Loading";
import { useQuery } from 'react-query' 

const Team = () => {
  let customStyleForShowAllMembersButton = {
    color: "#27C2C7",
  };

  const { isLoading, error, data } = useQuery("team-members", async () => {
    const response = await fetch("/api/teams");
    return response.json();
  });
  
  if(error){
    console.error(error.message)
  }

  return (
    <div>
      <TitleWithLine title="Team" styles="text-xl font-bold" />
      {isLoading ? (
        <Loading heading="team members" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 my-6 place-items-stretch">
          {data.slice(0, 6).map(member => {
            return (
              <TeamCard
                key={member.id}
                memberName={member.name}
                designation={member.designation}
                githubLink={member.github}
                linkedinLink={member.linkedin}
              />
            );
          })}
        </div>
      )}

      <div className="w-max m-auto mb-6">
        <LinkButton
          href="/teams"
          styles="px-4 py-2 bg-white"
          customCSS={customStyleForShowAllMembersButton}
        >
          See the <span className="font-semibold">whole team</span>
        </LinkButton>
      </div>
    </div>
  );
};

export default Team;
