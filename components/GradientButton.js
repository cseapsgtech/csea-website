const GradientButton = (props) => {
  return props.buttonType === "outline" ? (
    <div className="py-2 w-max px-4 rounded-lg text-sm border-2 border-white">
      {props.children}
    </div>
  ) : (
    <div className="py-2 w-max px-4 rounded-lg text-sm grad-button">
      {props.children}
    </div>
  );
};

export default GradientButton;
