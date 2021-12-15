import Link from 'next/link'

const SmallButton = (props) => {
    return(
        <Link href={props.href ? props.href : "/"}>
        <button className={`${props.styles} text-sm p-3 md:p-2 rounded-lg`} style={props.customCSS}>
            {props.children}
        </button>
        </Link>
    )
}

export default SmallButton;