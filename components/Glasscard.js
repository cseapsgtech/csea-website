const Glasscard = (props) => {
  return props.withTitleBar ? (
    <div className={`${props.styles} flex flex-col overflow-hidden glasscard`}>
    {/* Title Bar */}
      <div className="px-6 py-5 text-xl font-bold text-shadow" style={{borderBottom:"0.125rem solid rgba(255,255,255,0.25)"}}>{props.title}</div>
      <div className="px-6 py-4">{props.children}</div>
    </div>
  ) : (
    <div className={`${props.styles} p-5 glasscard`}>
      {props.children}
    </div>
  );
};

export default Glasscard;
