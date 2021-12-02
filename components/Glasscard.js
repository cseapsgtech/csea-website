const Glasscard = (props) => {
    return(
        <div className={`${props.className} px-5 py-5 glasscard`}>
            {props.children}
        </div>
    )
}

export default Glasscard;