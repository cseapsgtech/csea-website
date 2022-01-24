import Glasscard from "../Glasscard";
import UpcomingEvent from "./UpcomingEvent";
import TitleWithLine from "../TitleWithLine";
import GalleryContainer from "./GalleryContainer";
import Loading from "../Loading";
import { useQuery } from "react-query";
import { storage } from "../../firebase/clientApp";

const UpcomingEventsAndGallery = () => {

  const {
    isLoading: galleryLoading,
    data: images,
    error: galleryError,
  } = useQuery(
    "gallery",
    async () => {
      const result = await storage.ref("gallery/").listAll();

      const urls = await Promise.all(
        result.items.map(async (imageRef) => imageRef.getDownloadURL())
      );

      return urls;
    },
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const {
    isLoading: upcomingEventsLoading,
    error: upcomingEventsError,
    data: upcomingEvents,
  } = useQuery(
    "upcoming-events",
    async () => {
      const response = await fetch("/api/events/upcoming");
      const jsonresponse = await response.json();
      return jsonresponse;
    },
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  if (upcomingEventsError) {
    console.error(upcomingEventsError.message);
  }

  if (galleryError) {
    console.error(galleryError.message);
  }

  const getDate = (seconds) => {
    const date = new Date(seconds * 1000); // conversion from seconds to date
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <div className="flex flex-col gap-6 mb-6 md:flex-row w-full">
      {/*Upcoming events*/}

      <Glasscard styles={`w-full md:w-max ${upcomingEventsLoading && "h-3/6"}`}>
        <TitleWithLine title="Upcoming events" />
        {upcomingEventsLoading ? (
          <div className="w-full md:w-max px-8">
            <Loading heading="events" />
          </div>
        ) : (
          <div className="mb-2 xsm:mb-0 overflow-auto flex flex-col gap-y-8 xsm:pr-3 mt-4 xsm:max-h-128">
            {upcomingEvents
              .sort((a, b) => {
                // Turn seconds into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return (
                  new Date(b.date.seconds * 1000) -
                  new Date(a.date.seconds * 1000)
                );
              })
              .map((uc) => {
                return (
                  <UpcomingEvent
                    key={uc.id}
                    title={uc.name}
                    date={getDate(uc.date.seconds)}
                    imageSrc={uc.poster_link}
                    href={`/events/${uc.id}`}
                  />
                );
              })}
          </div>
        )}
      </Glasscard>

      {/*Gallery*/}
      <Glasscard styles="w-full">
        <TitleWithLine title="Gallery" />
        {galleryLoading ? (
          <Loading heading="gallery" />
        ) : (
          <div
            className="grid gap-3 overflow-auto md:pr-3 mt-4 h-fill md:max-h-128"
            style={{
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            }}
          >
            {images.map((imageLink, index) => {
              return <GalleryContainer key={index} img={imageLink} />;
            })}
          </div>
        )}
      </Glasscard>
    </div>
  );
};

export default UpcomingEventsAndGallery;
