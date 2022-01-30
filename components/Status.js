const Status = (props) => {
  return (
    <div className={`flex items-center justify-center py-6 m-auto ${props.styles}`}>
      {props.children}
    </div>
  );
};

export default Status;
