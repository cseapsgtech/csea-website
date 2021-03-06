import Image from "next/image";
import loadingIcon from "./svg/Loading.svg";

const Loading = (props) => {
  return (
    <div className={`flex items-center justify-center py-6 m-auto ${props.styles}`}>
      <Image src={loadingIcon} height="40" width="40" />
      {props.heading && (
        <span className="ml-2">Loading {props.heading}...</span>
      )}
    </div>
  );
};

export default Loading;
