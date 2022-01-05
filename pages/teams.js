import TopBar from "../components/TopBar";
import Head from "next/head";
import Glasscard from "../components/Glasscard";

const Members = {
  "faculty-advisor": {
    name: "Mrs.Aruljothi",
    img: "",
    description: [
      "Faculty Advisor",
      "Degree",
      "Lorem Ipsum 2",
      "Lorem Ipsum 3",
    ],
  },
  secretary: {
    name: "Dhilip Sanjay",
    img: "",
    description: ["Lorem Ipsum 1", "Lorem Ipsum 2"],
  },
  "joint-secretary": [
    {
      name: "Lorem Ipsum",
      img: "",
      description: ["Lorem Ipsum 1", "Lorem Ipsum 2"],
    },
    {
      name: "Lorem Ipsum",
      img: "",
      description: ["Lorem Ipsum 1", "Lorem Ipsum 2"],
    },
    {
      name: "Lorem Ipsum",
      img: "",
      description: ["Lorem Ipsum 1", "Lorem Ipsum 2"],
    },
  ],
  "executive-member": [
    {
      name: "Lorem Ipsum",
      img: "",
      description: ["Lorem Ipsum 1", "Lorem Ipsum 2"],
    },
    {
      name: "Lorem Ipsum",
      img: "",
      description: ["Lorem Ipsum 1", "Lorem Ipsum 2"],
    },
    {
      name: "Lorem Ipsum",
      img: "",
      description: ["Lorem Ipsum 1", "Lorem Ipsum 2"],
    },
  ],
};

const Teams = () => {
  return (
    <div>
      <Head>
        <title> Teams - CSEA </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopBar />
      <Glasscard styles="flex-1 w-full mb-6">
        <div className="flex flex-col items-center justify-center h-full p-4">
          <div className="text-xl md:text-3xl text-center">Our Team </div>
          <p className="text-md md:text-xl text-center">
            Meet the people who are behind the screen
          </p>
        </div>
      </Glasscard>
      <div className="flex flex-col md:flex-row md:space-x-4">
          <Glasscard styles="w-full flex flex-col md:flex-row flex-1 md:w-50 mb-6">
              
          </Glasscard>
          <Glasscard styles="w-full flex-1 md:w-50 mb-6">

          </Glasscard>
      </div>
    </div>
  );
};

export default Teams;
