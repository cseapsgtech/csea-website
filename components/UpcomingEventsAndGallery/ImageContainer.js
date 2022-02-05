import Image from "next/image";

const GalleryContainer = ({ img }) => {
  return (
    <div>
      <div className="bg-gray-300 rounded-md overflow-hidden">
        {img && (
          
          <Image
            src={img}
            className="transform transition-all duration-300 hover:scale-110 cursor-pointer"
            width="100%"
            height="100%"
            alt="gallery image"
            layout="responsive"
            objectFit="cover"
          />
          
        )}
      </div>
    </div>
  );
};

export default GalleryContainer;
