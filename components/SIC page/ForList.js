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
        } else if (item === "M.E. final year") {
          return (
            <GradientButton key={index} buttonType={buttonType} noHover>
              M.E. final year
            </GradientButton>
          );
        } else {
          return (
            <GradientButton key={index} buttonType={buttonType} noHover>
              {item}th year
            </GradientButton>
          );
        }
      })}
    </div>
  );
};

export default ForList;
