import Glasscard from "../Glasscard";
import Image from "next/image";

const HODDesk = (props) => {
  return (
    <Glasscard styles="mb-6" title={`HOD's Desk`} withTitleBar>
      <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
        <div>
          {/* Image holder */}
          <div className="bg-gray-300 h-48 w-48 rounded-md shadow-xl mt-2 overflow-hidden">
            <Image
              src="/hod.jpeg"
              alt="HOD photo"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
        <div>
          <div className="text-justify leading-loose text-shadow">
            Computer Science could be viewed as a discipline supported by the
            pillars - Hardware, Software, Systems Software and the Theory behind
            computing. Though started in the middle of 20th Century, this
            discipline has seen rapid changes and the fastest growth ever since
            mankind has started. Currently, Computing has become inseparable
            from human life.
            <br />
            <br />
            It has found a prominent place in our day to day life and we are
            struggling to cope with it. The mission of Computer Science &
            Engineering department is to impart knowledge to students and
            researchers to pave a solid foundation in problem solving using
            computers. The department has been started in the year 1987 and as
            of today, it offers an undergraduate program B.E (CSE) and two Post
            graduate programs viz., M.E (CSE) and M.E (Software Engineering).
            <br />
            <br />
            The department is augmented with well qualified Faculty with rich
            teaching and industry experience and has adequate Laboratories.
            Apart from teaching, our faculty members have published research
            papers in National and International journals. Our students
            undertake Internships in leading MNCs and are placed in reputed
            Organisations across the globe. Some of our Alumni have grown to
            great heights and they constantly interact with the department. We
            strive to provide students the necessary ambience to embellish their
            knowledge and skills to achieve their long term goals.
            <div className="font-black mt-6">
              <p>Dr. Sudha Sadasivam G.</p>
              <p>Professor and Head</p>
            </div>
          </div>
        </div>
      </div>
    </Glasscard>
  );
};

export default HODDesk;
