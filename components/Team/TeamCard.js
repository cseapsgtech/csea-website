import Glasscard from "../Glasscard";
import IconsHolder from "./IconsHolder";
import Image from "next/image";

const TeamCard = (props) => {
  return (
    <div className="team-member-card">
      <Glasscard>
        <div className="flex flex-row">
          {/* Image holder */}
          <div className="bg-gray-300 h-20 w-20 md:h-28 md:w-28 shadow-xl rounded-md team-member-image overflow-hidden">
          <Image
            src={props.imageSrc}
            width="100%"
            height="100%"
            alt={props.title + " poster"}
            layout="responsive"
            objectFit="cover"
          />
          </div>
          <div className="flex flex-col ml-4 gap-1 justify-center md:w-9/12">
            <span className="font-playfair text-xl font-bold text-shadow line-clamp-1">{props.memberName}</span>
            <span className="font-playfair text-sm text-shadow line-clamp-1">{props.designation}</span>
            <IconsHolder githubLink={props.githubLink} linkedinLink={props.linkedinLink} />
          </div>
        </div>
      </Glasscard>
    </div>
  );
};

export default TeamCard;
