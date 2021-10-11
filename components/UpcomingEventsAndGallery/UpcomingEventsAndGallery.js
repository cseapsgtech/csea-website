import Glasscard from "../Glasscard";
import UpcomingEvent from "./UpcomingEvent";
import TitleWithLine from "../TitleWithLine";
import Image from "next/image";
import styles from "../../styles/UpcomingEventsAndGallery.module.css";

const UpcomingEventsAndGallery = () => {
  return (
    <div className={styles.holder}>
      {/*Upcoming events*/}
      <Glasscard className={styles.upcomingEventsHolder}>
        <TitleWithLine title="Upcoming events" />
        {/*After fetching the result of API call to obtain upcoming events, use map function to generate the component for each upcoming event*/}
        <UpcomingEvent title="Upcoming Event 1" date="23/10/2021"/>
        <UpcomingEvent title="Upcoming Event 2" date="23/10/2021"/>
        <UpcomingEvent title="Upcoming Event 3" date="23/10/2021"/>
        <UpcomingEvent title="Upcoming Event 4" date="23/10/2021"/>
      </Glasscard>
      {/*Gallery*/}
      <Glasscard>This is the gallery!</Glasscard>
    </div>
  );
};

export default UpcomingEventsAndGallery;
