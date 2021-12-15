const TitleWithLine = (props) => {
  return (
    <div className="w-full text-l">
      <p className={`${props.styles} line-clamp-1 textShadow`}>{props.title}</p>
      <div className="w-full my-3 bg-white h-0.5 shadow-xl"></div>
    </div>
  );
};

export default TitleWithLine;
