const TitleWithLine = (props) => {
    return (
      <div className="w-full text-xl">
        {props.title}
        <div className="my-3 bg-white h-0.5"></div>
      </div>
    );
}

export default TitleWithLine