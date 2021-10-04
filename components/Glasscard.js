const Glasscard = (props) => {
    return(
        <div className={props.className + " glasscard"}>
            {props.children}
        </div>
    )
}

export default Glasscard