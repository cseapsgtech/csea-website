import Link from 'next/link'

const LinkButton = (props) => {
    return(
        <Link href={props.href ? props.href : "/"}>
        <button className={`text-sm rounded-lg ${props.styles}`} style={props.customCSS}>
            {props.children}
        </button>
        </Link>
    )
}

export default LinkButton;