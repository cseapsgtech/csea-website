const GradButton = (props) => {
    return (
      <button
        className={`py-2 px-4 rounded-lg text-sm bg-gradient-to-l from-green-400 to-blue-500 ${
          !props.noHover && "hover:from-blue-500 hover:to-green-400"
        }`}
      >
        {props.children}
      </button>
    );
}

export default GradButton
