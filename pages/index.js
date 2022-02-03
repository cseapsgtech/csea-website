import Head from "next/head";
import TopBar from "../components/TopBar";
import MottoAndSocial from "../components/MottoAndSocial/MottoAndSocial";
import UpcomingEventsAndGallery from "../components/UpcomingEventsAndGallery/UpcomingEventsAndGallery";
import Events from "../components/Events/Events";
import SIC from "../components/SIC/SIC";
// import News from "../components/News/News"
import Magazine from "../components/Magazine/Magazine";
import HODDesk from "../components/HODDesk/HODDesk";
import Team from "../components/Team/Team";
import Footer from "../components/Footer/Footer";
import { getCurrentAcademicYear } from "./api/events/year/currentAcademicYear";
import { getCompletedEvents } from "./api/events/year/[academicYear]/completed";
import { getUpcomingEvents } from "./api/events/year/[academicYear]/upcoming";
import { getPictureLinks } from "./api/gallery";
import { getTeamMembers } from "./api/teams";
import { getMagazineLinks } from "./api/magazine";

export default function Home({ allData }) {

  return (
    <div>
      <Head>
        <title>Home - CSEA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopBar />
      <MottoAndSocial />
      <UpcomingEventsAndGallery upcomingEvents={allData.upcomingEvents} gallery={allData.gallery} currentAcademicYear={allData.currentAcademicYear} />
      <Events events={allData.completedEvents} currentAcademicYear={allData.currentAcademicYear} />
      <SIC />
      <HODDesk />
      <Magazine links={allData.magazineLinks}/>
      {/* <News /> */}
      <Team teamMembers={allData.teamMembers}/>
      <Footer />
    </div>
  );
}

// Incremental Static Regeneration
export const getStaticProps = async () => {
  const currentAcademicYear = await getCurrentAcademicYear();
  const completedEvents = await getCompletedEvents(
    currentAcademicYear.academic_year
  );
  const upcomingEvents = await getUpcomingEvents(
    currentAcademicYear.academic_year
  );
  const gallery = await getPictureLinks();
  const magazineLinks = await getMagazineLinks();
  const teamMembers = await getTeamMembers();

  const allData = {
    currentAcademicYear: currentAcademicYear.academic_year,
    completedEvents,
    upcomingEvents,
    gallery,
    magazineLinks,
    teamMembers
  };

  return {
    props: {
      allData: JSON.parse(JSON.stringify(allData)),
    },
    revalidate: 120, // revalidate after 2 minutes
  };
};
