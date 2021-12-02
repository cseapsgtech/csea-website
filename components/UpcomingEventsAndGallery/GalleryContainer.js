const GalleryContainer = ({ img, caption }) => {
  // TODO: Gallery CSS to be improved
  return (
    <div className="my-2">
      <div
        className="h-60 w-full rounded-md"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="px-3 py-2 text-white text-sm text-center">{caption}</div>
    </div>
  );
};

export default GalleryContainer;
