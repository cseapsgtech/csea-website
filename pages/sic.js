import Head from 'next/head'
import Glasscard from "../components/Glasscard.js";
import TopBar from "../components/TopBar.js";
import ProblemStatementCard from '../components/ProblemStatementCard.js';

const SIC = () => {
  return (
    <div>
      <Head>
        <title>SIC - CSEA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopBar />
      <Glasscard styles="flex-1 w-full mb-6">
        <div className="flex flex-col items-center justify-center h-full p-4">
          <div className="text-xl md:text-3xl text-center">Student Interaction Corner</div>
          <button className="text-sm px-6 py-3 border-white border-2 mt-5 rounded-lg md:hover:bg-gray-700">
            <span className="font-semibold">KNOW MORE</span> about us!
          </button>
        </div>
      </Glasscard>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 mb-6">
        <ProblemStatementCard idx={1} />
        <ProblemStatementCard idx={2} isExpired />
        <ProblemStatementCard idx={3} />
        <ProblemStatementCard idx={4} />
        <ProblemStatementCard idx={5} isExpired />
      </div>
    </div>
  );
};

export default SIC;

