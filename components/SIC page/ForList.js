import GradientButton from "../GradientButton.js";

const ForList = ({ forList, buttonType = "normal" }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {forList.map((item, index) => {
        if (item === "1") {
          return (
            <GradientButton key={index} buttonType={buttonType} noHover>
              1st year
            </GradientButton>
          );
        } else if (item === "2") {
          return (
            <GradientButton key={index} buttonType={buttonType} noHover>
              2nd year
            </GradientButton>
          );
        } else if (item === "3") {
          return (
            <GradientButton key={index} buttonType={buttonType} noHover>
              3rd year
            </GradientButton>
          );
        } else if (item === "4") {
          return (
            <GradientButton key={index} buttonType={buttonType} noHover>
              4th year
            </GradientButton>
          );
        } else {
          return (
            <GradientButton key={index} buttonType={buttonType} noHover>
              {item}
            </GradientButton>
          );
        }
      })}
    </div>
  );
};

export default ForList;
