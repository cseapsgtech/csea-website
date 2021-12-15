import Head from "next/head"
import TopBar from "../components/TopBar"
import MottoAndSocial from "../components/MottoAndSocial/MottoAndSocial"
import UpcomingEventsAndGallery from "../components/UpcomingEventsAndGallery/UpcomingEventsAndGallery"
import Events from "../components/Events/Events"
import SIC from "../components/SIC/SIC"
import News from "../components/News/News"
import HODDesk from "../components/HODDesk/HODDesk"

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
      <News />
      <HODDesk />
    </div>
  )
}
