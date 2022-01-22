import Image from "next/image";

const IconsHolder = ({ githubLink, linkedinLink }) => {
  return (
    <div className="flex flex-row items-center gap-3 mt-1">
      {githubLink && (
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={githubLink}
          className="flex my-2 h-10 w-10 items-center rounded-full bg-gray-300"
        >
          <Image
            src="/static/Social media icons/github.png"
            width="100%"
            height="100%"
            alt="Github logo"
          />
        </a>
      )}
      {linkedinLink && (
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={linkedinLink}
          className="flex my-2 h-10 w-10 items-center rounded-full bg-blue-300"
        >
          <Image
            src="/static/Social media icons/linkedin.png"
            height="100%"
            width="100%"
            alt="LinkedIn logo"
          />
        </a>
      )}
    </div>
  );
};

export default IconsHolder;
