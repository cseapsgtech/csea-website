const GradButton = (props) => {
    return (
      <button
        className="py-2 px-4 rounded-md text-sm grad-button"
      >
        {props.children}
      </button>
    );
}

export default GradButton
