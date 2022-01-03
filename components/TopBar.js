import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div className="py-8 flex justify-center md:justify-between items-center font-playfair">
      <div className="hidden md:block">
        <Link href="/">
          <button className="font-bold">
            Computer Science and Engineering Association
          </button>
        </Link>
      </div>
      <Link href="/">
        <a>
          <Image
            height={20}
            width={120}
            src='/logo.png'
            alt="CSEA logo"
            className="cursor-pointer"
          />
        </a>
      </Link>
    </div>
  );
};

export default Home;
