import Link from 'next/link'
import Image from "next/image";

// Image imports
import logo from "../public/logo.png";

const Home = () => {
  return (
    <div className="py-8 flex justify-center md:justify-between items-center font-playfair">
      <div className="hidden md:block">
        <Link href="/">
          Computer Science and Engineering Association
        </Link>
      </div>
      <Image height={20} width={120} src={logo} alt="Logo of CSEA" />
    </div>
  );
};

export default Home;
