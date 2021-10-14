// This is the upcoming event component

import styles from "../../styles/UpcomingEventsAndGallery.module.css";

const UpcomingEvent = (props) => {
  return (
    <div className="py-0 mt-8 flex flex-col-reverse md:flex-row">
      <div className="flex items-start justify-start flex-col py-4 md:flex-grow md:py-0">
        <div className="italic">{props.title}</div>
        <div className="flex items-center justify-start gap-2 my-3 font-bold text-sm">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.09265 9.40427H20.9166"
              stroke="white"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.4421 13.3097H16.4514"
              stroke="white"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.0046 13.3097H12.0139"
              stroke="white"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5579 13.3097H7.56717"
              stroke="white"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.4421 17.1962H16.4514"
              stroke="white"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.0046 17.1962H12.0139"
              stroke="white"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5579 17.1962H7.56717"
              stroke="white"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.0437 2V5.29078"
              stroke="white"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.96552 2V5.29078"
              stroke="white"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.2383 3.57922H7.77096C4.83427 3.57922 3 5.21516 3 8.22225V17.2719C3 20.3263 4.83427 22 7.77096 22H16.229C19.175 22 21 20.3546 21 17.3475V8.22225C21.0092 5.21516 19.1842 3.57922 16.2383 3.57922Z"
              stroke="white"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {props.date}
        </div>
        <button className="py-2 px-4 rounded-lg text-sm bg-gradient-to-l from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400">
          Check out EVENT!
        </button>
      </div>
      <div className="bg-gray-300 h-36 w-full rounded-md md:h-28 md:w-28 shadow-xl"></div>
    </div>
  );
};

export default UpcomingEvent;
