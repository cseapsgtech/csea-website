import Link from "next/link";

const LinkButton = (props) => {
  return props.externalLink ? (
    <a href={props.href} rel="noopener noreferrer" target="_blank">
      <button
        className={`text-sm rounded-lg ${props.styles}`}
        style={props.customCSS}
      >
        {props.children}
      </button>
    </a>
  ) : (
    <Link href={props.href ? props.href : "/"}>
      <button
        className={`text-sm rounded-lg ${props.styles}`}
        style={props.customCSS}
      >
        {props.children}
      </button>
    </Link>
  );
};

export default LinkButton;
