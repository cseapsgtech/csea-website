import TitleWithLine from "../TitleWithLine";
import Glasscard from "../Glasscard";

const Magazine = (props) => {
  return (
    <div>
      <Glasscard styles="mb-6 flex flex-col items-start justify-center">
        <TitleWithLine title="Magazine" styles="text-xl font-bold" />
        This is the magazine component.
      </Glasscard>
    </div>
  );
};

export default Magazine;
