import Head from "next/head";
import { useRouter } from "next/router";
import TopBar from "../../components/TopBar";
import BackButton from "../../components/BackButton";
import Glasscard from "../../components/Glasscard";
import LinkButton from "../../components/LinkButton";

const Events = () => {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  const prevTwoYears = [currentYear - 1, currentYear - 2];

  return (
    <div>
      <Head>
        <title>Event archives - CSEA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopBar />
      <BackButton router={router} />
      <Glasscard styles="flex-1 w-full mb-6">
        <div className="flex flex-col items-center justify-center h-full p-4">
          <div className="text-2xl md:text-3xl text-center">Event archives</div>
        </div>
      </Glasscard>
      {/* Mapping prev years to specific links */}
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 my-6">
      {prevTwoYears.map((year, index) => {
        return (
          <LinkButton
            key={index}
            href={`/events/year/${year}`}
            styles="border-2 border-white w-full p-10 text-lg hover:border-green-500"
          >
            {year} Events
          </LinkButton>
        );
      })}
      </div>
    </div>
  );
};

export default Events;
