import TitleWithLine from "../TitleWithLine";
import LinkButton from '../LinkButton';
import TeamCard from "./TeamCard";

const Team = () => {
  let customStyleForShowAllMembersButton = {
    color: "#27C2C7",
  };

  // TODO: Get team members list from API
  const teamMembers = [
    {
      memberName: "Dhilip Sanjay S",
      designation: "Secretary",
      githubLink: "/",
      linkedinLink: "/",
    },
    {
      memberName: "Indrajit K V",
      designation: "Front end developer",
      githubLink: "/",
      linkedinLink: "/",
    },
    {
      memberName: "Dhilip Sanjay S",
      designation: "Secretary",
      githubLink: "/",
      linkedinLink: "/",
    },
    {
      memberName: "Indrajit K V",
      designation: "Front end developer",
      githubLink: "/",
      linkedinLink: "/",
    },
    {
      memberName: "Dhilip Sanjay S",
      designation: "Secretary",
      githubLink: "/",
      linkedinLink: "/",
    },
    {
      memberName: "Indrajit K V",
      designation: "Front end developer",
      githubLink: "/",
      linkedinLink: "/",
    },
  ];
  return (
    <div>
      <TitleWithLine title="Team" styles="text-xl font-bold" />
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 my-6 place-items-stretch">
        {teamMembers.slice(0, 6).map((member, index) => {
          return (
            <TeamCard
              key={index}
              memberName={member.memberName}
              designation={member.designation}
              githubLink={member.githubLink}
              linkedinLink={member.linkedinLink}
            />
          );
        })}
      </div>
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
