import Glasscard from "../Glasscard";
import LinkButton from "../LinkButton";
import TitleWithLine from "../TitleWithLine";

const SIC = (props) => {
  return (
    <Glasscard styles="mb-6 flex flex-col items-start justify-center">
      <TitleWithLine title="SIC" styles="text-xl font-bold" />
      <p className="text-justify leading-loose text-shadow">
        Description about SIC goes here - Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris.
      </p>
        <LinkButton
          href="/sic"
          styles="px-4 py-2 bg-white mt-4 mb-2 grad-button m-auto"
        >
          View <span className="font-semibold">problem statements</span>
        </LinkButton>
    </Glasscard>
  );
};

export default SIC;
