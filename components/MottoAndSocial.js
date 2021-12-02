import Glasscard from "./Glasscard";
import Image from "next/image";

// Image imports
import instaLogo from "../public/Social media icons/instagram.png";
import twitterLogo from "../public/Social media icons/twitter.png";
import linkedinLogo from "../public/Social media icons/linkedin.png";
import youtubeLogo from "../public/Social media icons/youtube.png";

const MottoAndSocial = () => {
  return (
    <div className="flex w-full flex-col md:flex-row">
      {/*Motto*/}
      <Glasscard className="flex-1 w-full my-4 md:my-0 md:mr-4">
        <div className="flex flex-col items-center justify-center h-full p-4">
          <div className="text-3xl text-center">
            Motto of <span className="italic font-semibold">CSEA</span> goes
            here
          </div>
          <button className="px-6 py-3 border-white border-2 rounded-lg my-5 md:hover:bg-gray-700">
            Check out the <span className="font-semibold">TEAM</span>!
          </button>
        </div>
      </Glasscard>
      {/*Social*/}
        <Glasscard>
          <div className="flex flex-row w-full justify-evenly items-center space-x-8 md:flex-col md:space-x-0 md:space-y-6">
            <div className="flex my-2 h-12 w-12 items-center rounded-full">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.instagram.com/cseapsgtech/"
              >
                <Image src={instaLogo} alt="Instagram logo" />
              </a>
            </div>
            <div className="flex my-2 h-12 w-12 items-center rounded-full">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.twitter.com/cseapsgtech/"
              >
                <Image src={twitterLogo} alt="Twitter logo" />
              </a>
            </div>
            <div className="flex my-2 h-12 w-12 items-center rounded-full">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.linkedin.com/in/cseapsgtech/"
              >
                <Image src={linkedinLogo} alt="Linkedin logo" />
              </a>
            </div>
            <div className="flex my-2 h-12 w-12 items-center rounded-full">
              <a target="_blank" rel="noreferrer noopener" href="#">
                <Image src={youtubeLogo} alt="Blog logo" />
              </a>
            </div>
          </div>
        </Glasscard>
    </div>
  );
};

export default MottoAndSocial;

