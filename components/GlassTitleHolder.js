import Glasscard from "./Glasscard";
import Image from "next/image";
import LeftArrowSVG from "./svg/LeftArrow.svg";
import RightArrowSVG from "./svg/RightArrow.svg";
import DownArrowSVG from "./svg/DownArrow.svg";

const GlassTitleHolder = (props) => {
  return (
    <Glasscard>
      <div className="flex min-w-max items-center justify-center gap-2 p-4">
        {props.titleType === "events" ? (
          <>
            <div className="tracking-wider text-lg antialiased">
              {props.title}
            </div>
            {/* EVENTS - Show right arrow if desktop, else down arrow*/}
            <div
              className="hidden md:block"
              style={{ height: "16px", width: "16px" }}
            >
              <Image src={RightArrowSVG} />
            </div>
            <div
              className="block md:hidden"
              style={{ height: "16px", width: "16px" }}
            >
              <Image src={DownArrowSVG} />
            </div>
          </>
        ) : (
          <>
            {/* NEWS - Show left arrow if desktop, else down arrow*/}
            <div
              className="hidden md:block"
              style={{ height: "16px", width: "16px" }}
            >
              <Image src={LeftArrowSVG} />
            </div>
            <div
              className="block md:hidden"
              style={{ height: "16px", width: "16px" }}
            >
              <Image src={DownArrowSVG} />
            </div>
            <div className="tracking-wider text-lg antialiased">
              {props.title}
            </div>
          </>
        )}
      </div>
    </Glasscard>
  );
};

export default GlassTitleHolder;
