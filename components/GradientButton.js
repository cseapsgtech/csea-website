const GradientButton = (props) => {
  return props.buttonType === "outline" ? (
    <button className="py-2 w-max px-4 rounded-lg text-sm border-2 border-white">
      {props.children}
    </button>
  ) : (
    <button className="py-2 w-max px-4 rounded-lg text-sm grad-button">
      {props.children}
    </button>
  );
};

export default GradientButton;
