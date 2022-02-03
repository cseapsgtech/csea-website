import TitleWithLine from "../TitleWithLine";
import Glasscard from "../Glasscard";
import LinkButton from "../LinkButton";

const Magazine = ({ links }) => {
  return (
    <div>
      <Glasscard styles="mb-6 flex flex-col items-start justify-center">
        <TitleWithLine title="Magazine" styles="text-xl font-bold" />
        <p className="text-justify leading-loose text-shadow">
          We at the magazine team, believe that the right words can oftentimes
          go on par with actions. Our team of 6, aims to bring articles that can
          help you find your way through your career and articles that bring on
          a fresh perspective. We collect articles from absolute novices to
          professionals alike, compile them and present them to students to
          provide them with inspiration, guidance and something to think upon.
        </p>
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 mt-4 place-items-stretch">
          {links
            .sort((a, b) => a.index - b.index)
            .slice(0, 4)
            .map((link) => {
              return (
                <LinkButton
                  key={link.index}
                  href={link.link}
                  styles="p-4 border-2 border-white w-full hover:bg-white hover:text-black transition-all duration-300"
                  externalLink
                >
                  {link.id}
                </LinkButton>
              );
            })}
        </div>
      </Glasscard>
    </div>
  );
};

export default Magazine;
