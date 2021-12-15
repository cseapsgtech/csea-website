import Glasscard from "../Glasscard";
import UpcomingEvent from "./UpcomingEvent";
import TitleWithLine from "../TitleWithLine";
import GalleryContainer from "./GalleryContainer";

const UpcomingEventsAndGallery = () => {
  return (
    <div className="flex flex-col gap-6 mb-6 md:flex-row w-full">
      {/*Upcoming events*/}
      <Glasscard styles="w-full md:w-max">
        <TitleWithLine title="Upcoming events" />
        {/*After fetching the result of API call to obtain upcoming events, use map function to generate the component for each upcoming event*/}
        <div className="overflow-auto flex flex-col justify-between gap-y-8 pr-3" style={{height: "500px"}}>
          <UpcomingEvent title="Upcoming Event 1 with a long event name" date="23/10/2021" />
          <UpcomingEvent title="Upcoming Event 2" date="23/10/2021" />
          <UpcomingEvent title="Upcoming Event 3" date="23/10/2021" />
          <UpcomingEvent title="Upcoming Event 4" date="23/10/2021" />
          <UpcomingEvent title="Upcoming Event 5" date="23/10/2021" />
        </div>
      </Glasscard>
      {/*Gallery*/}
      <Glasscard styles="w-full">
        <TitleWithLine title="Gallery" />
        <div
          className="grid gap-3 overflow-auto pr-3"
          style={{ height: "500px", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}
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