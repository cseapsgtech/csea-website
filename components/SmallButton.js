const SmallButton = (props) => {
    return(
        <button className={`${props.styles} text-sm p-3 md:p-2 rounded-lg`} style={props.customCSS}>
            {props.children}
        </button>
    )
}

export default SmallButton;