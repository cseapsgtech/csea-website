import Link from "next/link";
import Image from "next/image";

const OtherLinksHolder = () => {
  return (
    <div className="w-full md:w-64">
      <div className="flex flex-col">
        <Link href="/">
          <a className="text-shadow my-2">About</a>
        </Link>
        <Link href="/">
          <a className="text-shadow my-2">Life at CSEA</a>
        </Link>
        <Link href="/">
          <a className="text-shadow my-2">Feedback</a>
        </Link>
        <Link href="/">
          <a className="text-shadow my-2" href="https://www.psgtech.edu/" rel="noopener noreferrer" target="_blank">PSG Tech Official Website</a>
        </Link>
      </div>
      <div className="w-full my-3 bg-white h-0.5 shadow-xl"></div>
      <div className="flex items-center gap-4">
      <div className="bg-white p-2 flex items-center justify-center rounded-md"><Image src="/college logo.png" height={50} width={40} alt="PSG logo"/></div>
      <Image src="/logo.png" height={20} width={120} alt="CSEA logo"/>
      </div>
    </div>
  );
};

export default OtherLinksHolder;
