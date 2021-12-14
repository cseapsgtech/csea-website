const TitleWithLine = (props) => {
    return (
      <div className="w-full text-l">
        <p className={`${props.styles} line-clamp-1`}>{props.title}</p>
        <div className="w-full mt-3 mb-6 bg-white h-0.5"></div>
      </div>
    );
}

export default TitleWithLine