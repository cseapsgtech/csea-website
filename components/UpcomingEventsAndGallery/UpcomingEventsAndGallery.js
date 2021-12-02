import Glasscard from "../Glasscard";
import UpcomingEvent from "./UpcomingEvent";
import TitleWithLine from "../TitleWithLine";
import Image from "next/image";

const UpcomingEventsAndGallery = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/*Upcoming events*/}
      <Glasscard className="w-full md:w-2/6 my-4 mr-4">
        <TitleWithLine title="Upcoming events" />
        {/*After fetching the result of API call to obtain upcoming events, use map function to generate the component for each upcoming event*/}
        <div className="overflow-auto pr-3" style={{height: "500px"}}>
          <UpcomingEvent title="Upcoming Event 1" date="23/10/2021" />
          <UpcomingEvent title="Upcoming Event 2" date="23/10/2021" />
          <UpcomingEvent title="Upcoming Event 3" date="23/10/2021" />
          <UpcomingEvent title="Upcoming Event 4" date="23/10/2021" />
        </div>
      </Glasscard>
      {/*Gallery*/}
      <Glasscard className="w-full md:w-4/6 my-4">
        <TitleWithLine title="Gallery" />
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-x-5 overflow-auto pr-3"
          style={{ height: "500px" }}
        >
          {/*After fetching the result of API call to obtain upcoming events, use map function to generate the component for each upcoming event*/}
          <GalleryContainer
            img="https://images.unsplash.com/photo-1633943934319-8977edad7de7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=388&q=80"
            caption="Hey !"
          />
          <GalleryContainer
            img="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=820&q=80"
            caption="Hey !"
          />
          <GalleryContainer
            img="https://images.unsplash.com/photo-1593642633279-1796119d5482?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=388&q=80"
            caption="Hey !"
          />
          <GalleryContainer
            img="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            caption="Hey !"
          />
          <GalleryContainer
            img="https://images.unsplash.com/photo-1539683255143-73a6b838b106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=385&q=80"
            caption="Hey !"
          />
        </div>
      </Glasscard>
    </div>
  );
};

export default UpcomingEventsAndGallery;


const GalleryContainer = ({img, caption}) => {
  // TODO: Gallery CSS to be improved
  return <div className="bg-gray-300 my-2">
    <div className="h-60 w-full " style={{backgroundImage: `url(${img})`, backgroundPosition: "50% 50%", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}></div>
    <div className="px-3 py-2 text-gray-700">{caption}</div>
  </div>
}