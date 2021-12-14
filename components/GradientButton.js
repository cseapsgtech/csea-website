const GradientButton = (props) => {
    return (
      <button
        className="py-2 w-max px-4 rounded-lg text-sm grad-button"
      >
        {props.children}
      </button>
    );
}

export default GradientButton
