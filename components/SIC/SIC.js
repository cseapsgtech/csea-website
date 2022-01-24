import Glasscard from "../Glasscard";
import LinkButton from "../LinkButton";
import TitleWithLine from "../TitleWithLine";

const SIC = (props) => {
  return (
    <Glasscard styles="mb-6 flex flex-col items-start justify-center">
      <TitleWithLine title="Students Interaction Corner" styles="text-xl font-bold" />
      <p className="text-justify leading-loose text-shadow">
        We, Student Interaction Corner aim to increase the Senior - Junior
        interaction by conducting frequent meet ups and discuss on-demand topics
        to familiarise with various aspects. We will be speaking about wide
        range of topics and also collect periodic feedbacks to constantly
        improve the quality of content delivered. Also, this acts as a platform
        where juniors can get a chance to interact with like minded seniors and
        also get their valuable suggestions and experience.
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
