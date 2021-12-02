const TitleWithLine = (props) => {
    return (
      <div className="w-full text-l">
        {props.title}
        <div className="mt-3 mb-6 bg-white h-0.5"></div>
      </div>
    );
}

export default TitleWithLine