import Head from "next/head"
import TopBar from "../components/TopBar"
import MottoAndSocial from "../components/MottoAndSocial"
import UpcomingEventsAndGallery from "../components/UpcomingEventsAndGallery/UpcomingEventsAndGallery"

export default function Home() {
  return (
    <div>
      <Head>
        <title>CSEA - Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopBar />
      <MottoAndSocial />
      <UpcomingEventsAndGallery />
    </div>
  )
}
