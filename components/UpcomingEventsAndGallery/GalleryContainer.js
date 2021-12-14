const GalleryContainer = ({ img, caption }) => {
  // TODO: Gallery CSS to be improved
  return (
    <div className="w-full">
      <img src={img} className="h-60 w-full rounded-md object-cover" alt="gallery image" /> 
      <div className="px-3 py-2 text-white text-sm text-center">{caption}</div>
    </div>
  );
};

export default GalleryContainer;
