import TitleWithLine from "../TitleWithLine";
import LinkButton from "../LinkButton";
import TeamCard from "./TeamCard";
import Loading from "../Loading";
// import { useQuery } from "react-query";

const Team = ({ teamMembers }) => {
  let customStyleForShowAllMembersButton = {
    color: "#27C2C7",
  };

  return (
    <div>
      <TitleWithLine title="Team" styles="text-xl font-bold" />

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 my-6 place-items-stretch">
        {teamMembers
          .sort((a, b) => a.index - b.index)
          .slice(0, 6)
          .map((member) => {
            return (
              <TeamCard
                key={member.index}
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
