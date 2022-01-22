import Glasscard from "../Glasscard";
import IconsHolder from "./IconsHolder";
import Image from "next/image";

const TeamCard = (props) => {
  return (
    <div className="team-member-card">
      <Glasscard>
        <div className="flex flex-row">
          {/* Image holder */}
          <div className="rounded-full bg-gray-300 h-20 w-20 xsm:h-28 xsm:w-28 shadow-xl xsm:rounded-md team-member-image overflow-hidden">
            {props.imageSrc && (
              <Image
                src={props.imageSrc}
                width="100%"
                height="100%"
                alt={"Picture of " + props.memberName}
                layout="responsive"
                objectFit="cover"
              />
            )}
          </div>
          <div className="flex flex-col ml-4 gap-1 justify-center w-6/12 xsm:w-9/12">
            <span className="font-playfair text-xl font-bold text-shadow line-clamp-1">
              {props.memberName}
            </span>
            <span className="font-playfair text-md text-shadow line-clamp-1 font-bold">
              {props.designation}
            </span>
            <span className="font-playfair text-sm text-shadow line-clamp-1">
              {props.academicTitle}
            </span>
            
            <IconsHolder
              githubLink={props.githubLink}
              linkedinLink={props.linkedinLink}
            />
          </div>
        </div>
      </Glasscard>
    </div>
  );
};

export default TeamCard;
