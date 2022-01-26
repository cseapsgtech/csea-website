import Glasscard from "../Glasscard";
import LinkButton from "../LinkButton";
import Image from "next/image";

const MottoAndSocial = () => {
  return (
    <div className="flex w-full flex-col gap-6 mb-6 md:flex-row">
      {/*Motto*/}
      <Glasscard styles="flex-1 w-full md:my-0">
        <div className="flex flex-col justify-center items-center xsm:items-start p-2 md:p-4 h-full">
          <a className="hidden xsm:block text-xl md:text-2xl text-right w-full text-shadow font-playfair">
            About CSEA
          </a>
          <div className="hidden xsm:block w-full my-4 bg-white h-0.5 shadow-xl"></div>
          <div className="text-base leading-loose md:text-lg text-justify text-shadow md:leading-loose font-playfair">
            CSEA, the disciplinary association for the department of Computer
            Science and Engineering, <span className="font-semibold">stands as a platform to help the students
            enhance their practical knowledge and technical skills through
            various events like group discussions, seminars, workshops, guest
            lectures and various other competitions.</span>
          </div>
          <LinkButton
            href="/teams"
            styles="px-4 py-2 border-white border-2 rounded-lg mt-4 md:hover:bg-gray-700 text-shadow w-max"
          >
            Check out the <span className="font-semibold">TEAM</span>!
          </LinkButton>
        </div>
      </Glasscard>
      {/*Social*/}
      <Glasscard>
        <div className="flex flex-row w-full h-full justify-around items-center gap-x-8 md:flex-col md:gap-x-0 md:gap-y-2">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.instagram.com/cseapsgtech/"
            className="flex my-2 h-12 w-12 items-center rounded-full"
          >
            <Image
              src="/static/Social media icons/instagram.png"
              height="100%"
              width="100%"
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
              height="100%"
              width="100%"
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
              height="100%"
              width="100%"
              alt="Linkedin logo"
            />
          </a>

          {/* <a
            target="_blank"
            rel="noreferrer noopener"
            href="#"
            className="flex my-2 h-12 w-12 items-center rounded-full"
          >
            <Image
              src="/static/Social media icons/youtube.png"
              height="100%"
              width="100%"
              alt="Blog logo"
            />
          </a> */}
        </div>
      </Glasscard>
    </div>
  );
};

export default MottoAndSocial;
