import TitleWithLine from "../TitleWithLine";
import Glasscard from "../Glasscard";
import OtherLinksHolder from "./OtherLinksHolder";
import MapHolder from "./MapHolder";

const Footer = () => {
  return (
    <div className="mb-6">
      <TitleWithLine title="Contact" styles="text-xl font-bold" />
      <div className="flex flex-col-reverse lg:flex-row gap-4">
        <OtherLinksHolder />
        <Glasscard styles="bg-green-500 w-full">
          {/* Address */}
          <div className="mb-6">
            <p className="font-semibold font-playfair border-b-2 border-white pb-2 mb-2 w-max">
              Address
            </p>
            <span className="leading-loose">
              Post Box No. 1611,
              <br />
              Peelamedu,
              <br />
              Coimbatore - 641004
            </span>
          </div>
          {/* Contact */}
          <div>
            <p className="font-semibold font-playfair border-b-2 border-white pb-2 mb-2 w-max">
              Contact
            </p>
            <span className="leading-loose">
              0422-2572177, 2572477, 4344777
            </span>
          </div>
        </Glasscard>
        {/* TODO: Insert Google Map here */}
        <MapHolder />
      </div>
    </div>
  );
};

export default Footer;
