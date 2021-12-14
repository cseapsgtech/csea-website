import Glasscard from "./Glasscard";
import Image from "next/image";
import RightArrowSVG from "./svg/RightArrow.svg";

const GlassTitleHolder = (props) => {
  return (
    <Glasscard>
      <div className="flex min-w-max items-center justify-center gap-2 p-4">
        <div className="tracking-wider text-lg antialiased shadow-sm">{props.title}</div>
        <Image src={RightArrowSVG} height={16} width={16}/>
      </div>
    </Glasscard>
  );
};

export default GlassTitleHolder;
