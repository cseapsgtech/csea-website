import Glasscard from "../Glasscard";
import UpcomingEvent from "./UpcomingEvent";
import TitleWithLine from "../TitleWithLine";
import GalleryContainer from "./GalleryContainer";
import Loading from "../Loading";
import { useQuery } from "react-query";

const UpcomingEventsAndGallery = () => {
  const getDate = (seconds) => {
    const date = new Date(seconds * 1000); // conversion from seconds to date
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const { isLoading, error, data } = useQuery("upcoming-events", async () => {
    const response = await fetch("/api/events/upcoming");
    const jsonresponse = await response.json();
    return jsonresponse;
  });

  if (error) {
    console.error(error.message);
  }

  return (
    <div className="flex flex-col gap-6 mb-6 md:flex-row w-full">
      {/*Upcoming events*/}
      <Glasscard styles="w-full md:w-max">
        <TitleWithLine title="Upcoming events" />
        {/*After fetching the result of API call to obtain upcoming events, use map function to generate the component for each upcoming event*/}
        {isLoading ? (
          <div className="w-full md:w-max px-8">
            <Loading heading="events" />
          </div>
        ) : (
          <div className="mb-2 xsm:mb-0 overflow-auto flex flex-col gap-y-8 xsm:pr-3 mt-4 h-fill xsm:max-h-128">
            {data.map((uc) => {
              return (
                <UpcomingEvent
                  key={uc.id}
                  title={uc.name}
                  date={getDate(uc.date.seconds)}
                  imageSrc={uc.poster_link}
                />
              );
            })}
          </div>
        )}
      </Glasscard>
      {/*Gallery*/}
      <Glasscard styles="w-full">
        <TitleWithLine title="Gallery" />
        <div
          className="grid gap-3 overflow-auto md:pr-3 mt-4 h-fill md:max-h-128"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          }}
        >
          {/*After fetching the result of API call to obtain upcoming events, use map function to generate the component for each upcoming event*/}
          <GalleryContainer
            img="https://images.unsplash.com/photo-1633943934319-8977edad7de7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=388&q=80"
            caption="Image caption"
          />
          <GalleryContainer
            img="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=820&q=80"
            caption="Image caption"
          />
          <GalleryContainer
            img="https://images.unsplash.com/photo-1593642633279-1796119d5482?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=388&q=80"
            caption="Image caption"
          />
          <GalleryContainer
            img="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            caption="Image caption"
          />
          <GalleryContainer
            img="https://images.unsplash.com/photo-1539683255143-73a6b838b106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=385&q=80"
            caption="Image caption"
          />
        </div>
      </Glasscard>
    </div>
  );
};

export default UpcomingEventsAndGallery;
