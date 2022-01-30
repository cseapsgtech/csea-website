const Status = (props) => {
  return (
    <div className={`flex items-center justify-center p-4 m-auto border-2 ${props.styles}`}>
      {props.children}
    </div>
  );
};

export default Status;
