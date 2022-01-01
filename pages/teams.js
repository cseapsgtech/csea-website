import TopBar from "../components/TopBar"
import Head from "next/head";
import Glasscard from "../components/Glasscard";
const Teams = () => {
    return (
      <div>
        <Head>
          <title>Teams - CSEA</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <TopBar />
        <Glasscard  styles="flex-1 w-full mb-6">
          <div className="flex flex-col items-center justify-center h-full p-4">
            <div className="text-xl md:text-3xl text-center">
              Our Team
            </div>
            <p className="text-lg md:text-xl">Meet the people who are behind the screen</p>
          </div>
        </Glasscard>

      </div>
    );
}

export default Teams;
