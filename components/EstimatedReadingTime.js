const EstimatedReadingTime = (props) => {
  return (
    <div
      className={`${props.styles} flex items-center gap-1.5 font-bold text-sm`}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_134_336)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.9998 2.00049C8.47654 2.00049 3.99976 6.47727 3.99976 12.0005C3.99976 17.5237 8.47654 22.0005 13.9998 22.0005C19.523 22.0005 23.9998 17.5237 23.9998 12.0005C23.9998 6.47727 19.523 2.00049 13.9998 2.00049ZM13.9998 3.50049C18.6945 3.50049 22.4998 7.3057 22.4998 12.0005C22.4998 16.6953 18.6945 20.5005 13.9998 20.5005C9.30497 20.5005 5.49976 16.6953 5.49976 12.0005C5.49976 7.3057 9.30497 3.50049 13.9998 3.50049ZM14.4045 7.74512C14.3548 7.37904 14.0411 7.09689 13.6614 7.09689C13.2471 7.09689 12.9114 7.43267 12.9114 7.84689V12.6939L12.9197 12.8056C12.9528 13.0257 13.0827 13.222 13.2771 13.338L17.0471 15.587L17.138 15.6332C17.4779 15.7781 17.8809 15.6532 18.0755 15.3271L18.1217 15.2362C18.2666 14.8964 18.1417 14.4933 17.8156 14.2988L14.411 12.267L14.4114 7.84689L14.4045 7.74512Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_134_336"
            x="-2"
            y="0"
            width="32"
            height="32"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_134_336"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_134_336"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <span className="text-shadow">{props.readingTime} minute read</span>
    </div>
  );
};

export default EstimatedReadingTime;
