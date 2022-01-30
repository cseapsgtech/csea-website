import Head from "next/head"
import TopBar from "../components/TopBar"
import MottoAndSocial from "../components/MottoAndSocial/MottoAndSocial"
import UpcomingEventsAndGallery from "../components/UpcomingEventsAndGallery/UpcomingEventsAndGallery"
import Events from "../components/Events/Events"
import SIC from "../components/SIC/SIC"
// import News from "../components/News/News"
import Magazine from "../components/Magazine/Magazine"
import HODDesk from "../components/HODDesk/HODDesk"
import Team from "../components/Team/Team"
import Footer from "../components/Footer/Footer"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - CSEA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopBar />
      <MottoAndSocial />
      <UpcomingEventsAndGallery />
      <Events />
      <SIC />
      <HODDesk />
      <Magazine />
      {/* <News /> */}
      <Team />
      <Footer />
    </div>
  )
}
