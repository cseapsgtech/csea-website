import Glasscard from "../Glasscard";
import Image from "next/image";

const MottoAndSocial = () => {
  return (
    <div className="flex w-full flex-col my-4 md:flex-row">
      {/*Motto*/}
      <Glasscard className="flex-1 w-full my-4 md:my-0 md:mr-4">
        <div className="flex flex-col items-center justify-center h-full p-4">
          <div className="text-2xl md:text-3xl text-center textShadow">
            Motto of <span className="italic font-semibold">CSEA</span> goes
            here
          </div>
          <button className="px-6 py-2 border-white border-2 rounded-lg my-5 md:hover:bg-gray-700 textShadow">
            Check out the <span className="font-semibold">TEAM</span>!
          </button>
        </div>
      </Glasscard>
      {/*Social*/}
      <Glasscard>
        <div className="flex flex-row w-full justify-evenly items-center gap-x-8 md:flex-col md:gap-x-0 md:gap-y-2">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.instagram.com/cseapsgtech/"
            className="flex my-2 h-12 w-12 items-center rounded-full"
          >
            <Image
              src="/static/Social media icons/instagram.png"
              height="48px"
              width="48px"
              alt="Instagram logo"
            />
          </a>

          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.twitter.com/cseapsgtech/"
            className="flex my-2 h-12 w-12 items-center rounded-full"
          >
            <Image
              src="/static/Social media icons/twitter.png"
              height="48px"
              width="48px"
              alt="Twitter logo"
            />
          </a>

          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.linkedin.com/in/cseapsgtech/"
            className="flex my-2 h-12 w-12 items-center rounded-full"
          >
            <Image
              src="/static/Social media icons/linkedin.png"
              height="48px"
              width="48px"
              alt="Linkedin logo"
            />
          </a>

          <a
            target="_blank"
            rel="noreferrer noopener"
            href="#"
            className="flex my-2 h-12 w-12 items-center rounded-full"
          >
            <Image
              src="/static/Social media icons/youtube.png"
              height="48px"
              width="48px"
              alt="Blog logo"
            />
          </a>
        </div>
      </Glasscard>
    </div>
  );
};

export default MottoAndSocial;
