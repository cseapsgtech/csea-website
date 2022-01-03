import Glasscard from "../Glasscard";
import TitleWithLine from "../TitleWithLine";

const HODDesk = (props) => {
  return (
    <Glasscard styles="mb-6" title={`HOD's Desk`} withTitleBar>
      <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
        <div>
          {/* Image holder */}
          <div className="bg-gray-300 h-48 w-48 rounded-md shadow-xl mt-2"></div>
        </div>
        <div>
          <div className="text-justify leading-loose text-shadow">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
            <div className="font-black mt-6">
              <p>XYZ</p>
              <p>Professor and Head</p>
            </div>
          </div>
        </div>
      </div>
    </Glasscard>
  );
};

export default HODDesk;
