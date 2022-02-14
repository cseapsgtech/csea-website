import Image from "next/image";

const OtherLinksHolder = () => {
  return (
    <div className="w-full lg:w-128">
      <div className="flex flex-col">
        <a
          className="text-shadow my-2"
          href="http://events.psgtech.edu/studentsunion/subindex.php?club=csea"
          rel="noopener noreferrer"
          target="_blank"
        >
          About
        </a>

        {/* <a className="text-shadow my-2">Life at CSEA</a> */}

        <a
          className="text-shadow my-2"
          href="https://forms.gle/c5yMsweJZxVD6z9p6"
          rel="noopener noreferrer"
          target="_blank"
        >
          Feedback
        </a>

        <a
          className="text-shadow my-2"
          href="https://www.psgtech.edu/"
          rel="noopener noreferrer"
          target="_blank"
        >
          PSG Tech Official Website
        </a>
      </div>
      <div className="w-full my-3 bg-white h-0.5 shadow-xl"></div>
      <div className="flex items-center gap-4">
        <div className="bg-white p-2 flex items-center justify-center rounded-md">
          <Image
            src="/college logo.png"
            height={50}
            width={40}
            alt="PSG logo"
          />
        </div>
        <Image src="/logo.png" height={20} width={120} alt="CSEA logo" />
      </div>
      <div className="my-3 text-sm w-full text-center bg-white bg-opacity-25 text-white p-2 rounded-md">
        Designed with ❤️ by CSEA
      </div>
    </div>
  );
};

export default OtherLinksHolder;
