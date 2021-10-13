const TitleWithLine = (props) => {
    return(
        <div className="titleWithLine text-xl">
            {props.title}
            <div className="underLine"></div>
        </div>
);
}

export default TitleWithLine