const TitleWithLine = (props) => {
  return (
    <div className={`w-full ${props.isLargeText ? "text-lg" : "text-base"}`}>
      <p className={`${props.styles} text-shadow truncate`} title={props.title}>
        {props.title}
      </p>
      <div className="w-full my-3 bg-white h-0.5 shadow-xl"></div>
    </div>
  );
};

export default TitleWithLine;
