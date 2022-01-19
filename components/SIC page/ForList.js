import GradientButton from "../GradientButton.js";

const ForList = ({ forList, buttonType = "normal" }) => {
  return (
    <div className="flex gap-2 my-6 flex-wrap">
      {forList.map((item, index) => {
        if (item === "1") {
          return (
            <GradientButton key={index} buttonType={buttonType} noHover>
              1st Year
            </GradientButton>
          );
        } else if (item === "2") {
          return (
            <GradientButton key={index} buttonType={buttonType} noHover>
              2nd Year
            </GradientButton>
          );
        } else if (item === "3") {
          return (
            <GradientButton key={index} buttonType={buttonType} noHover>
              3rd Year
            </GradientButton>
          );
        } else if (item === "M.E.") {
          return (
            <GradientButton key={index} buttonType={buttonType} noHover>
              M.E.
            </GradientButton>
          );
        } else {
          return (
            <GradientButton key={index} buttonType={buttonType} noHover>
              {item}th Year
            </GradientButton>
          );
        }
      })}
    </div>
  );
};

export default ForList;
