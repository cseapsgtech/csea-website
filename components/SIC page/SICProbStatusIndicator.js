const SICProbStatusIndicator = (props) => {
  return (
    <div>
      {props.isExpired ? (
        <div className="flex items-center gap-1.5 font-bold text-sm bg-red-500 p-2 rounded-lg w-max">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.2503 16.2696C11.2503 15.8556 11.5863 15.5136 12.0003 15.5136C12.4143 15.5136 12.7503 15.8446 12.7503 16.2586V16.2696C12.7503 16.6836 12.4143 17.0196 12.0003 17.0196C11.5863 17.0196 11.2503 16.6836 11.2503 16.2696Z"
              fill="white"
            />
            <path
              d="M4.79569 20.4179H19.2777C20.4247 20.3579 21.3067 19.3809 21.2477 18.2339C21.2347 18.0019 21.1847 17.7729 21.0967 17.5589L13.8197 4.82292C13.2637 3.81792 11.9987 3.45392 10.9937 4.01092C10.6517 4.19892 10.3697 4.48092 10.1807 4.82292L2.90369 17.5589C2.47169 18.6229 2.98369 19.8349 4.04669 20.2679C4.26269 20.3549 4.49069 20.4049 4.72269 20.4179"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.9899 13.3961V10.2961"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Expired</p>
        </div>
      ) : (
        <div className="flex items-center gap-1.5 font-bold text-sm bg-green-500 p-2 rounded-lg w-max">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.3344 2.75018H7.66543C4.64443 2.75018 2.75043 4.88918 2.75043 7.91618V16.0842C2.75043 19.1112 4.63543 21.2502 7.66543 21.2502H16.3334C19.3644 21.2502 21.2504 19.1112 21.2504 16.0842V7.91618C21.2504 4.88918 19.3644 2.75018 16.3344 2.75018Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.43994 12.0002L10.8139 14.3732L15.5599 9.6272"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>Active</p>
        </div>
      )}
    </div>
  );
};

export default SICProbStatusIndicator;
