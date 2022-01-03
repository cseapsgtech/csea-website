import Link from "next/link";
import Image from "next/image";

const OtherLinksHolder = () => {
  return (
    <div className="w-64">
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
          <a className="text-shadow my-2">PSG Tech Official Website</a>
        </Link>
      </div>
      <div className="w-full my-3 bg-white h-0.5 shadow-xl"></div>
      <Image src="/images/logo.png" height={20} width={120} alt="CSEA logo" />
    </div>
  );
};

export default OtherLinksHolder;
