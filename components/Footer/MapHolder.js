const MapHolder = () => {
  return (
    <div className="rounded-md overflow-hidden h-96 lg:h-80 lg:w-10/12">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1857162154984!2d76.99993861480299!3d11.024688692153317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582f1435fa59%3A0x137d95bfd8909293!2sPSG%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1638542384224!5m2!1sen!2sin"
      frameBorder="0"
      style={{border:"0", width: "100%", height: "100%"}}
      allowFullScreen
    ></iframe>
    </div>
  );
};

export default MapHolder;
