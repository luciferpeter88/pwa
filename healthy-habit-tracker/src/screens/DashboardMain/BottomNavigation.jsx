import { Link } from "react-router-dom";
export default function BottomNavigation() {
  return (
    <nav className="flex gap-16 justify-center items-center  mt-auto w-full bg-[#232828] h-[20vw]">
      <button>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6548 19.3452L12.7262 12.7262L19.3453 10.6548L17.2738 17.2738L10.6548 19.3452Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="15"
            cy="15"
            r="12.5"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <Link to="/stats">
        <button>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.21423 11.8146C9.732 11.8146 10.1517 12.2344 10.1517 12.7521V21.3273C10.1517 21.8451 9.732 22.2648 9.21423 22.2648C8.69647 22.2648 8.27673 21.8451 8.27673 21.3273V12.7521C8.27673 12.2344 8.69647 11.8146 9.21423 11.8146Z"
              fill="#6C736F"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.0476 7.7114C15.5654 7.7114 15.9851 8.13113 15.9851 8.6489V21.3273C15.9851 21.8451 15.5654 22.2648 15.0476 22.2648C14.5298 22.2648 14.1101 21.8451 14.1101 21.3273V8.6489C14.1101 8.13113 14.5298 7.7114 15.0476 7.7114Z"
              fill="#6C736F"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.7858 16.346C21.3035 16.346 21.7233 16.7658 21.7233 17.2835V21.3273C21.7233 21.8451 21.3035 22.2648 20.7858 22.2648C20.268 22.2648 19.8483 21.8451 19.8483 21.3273V17.2835C19.8483 16.7658 20.268 16.346 20.7858 16.346Z"
              fill="#6C736F"
            />
          </svg>
        </button>
      </Link>
      <Link to="/profile">
        <button>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 3.4375C12.066 3.4375 9.6875 5.81599 9.6875 8.75C9.6875 11.684 12.066 14.0625 15 14.0625C17.934 14.0625 20.3125 11.684 20.3125 8.75C20.3125 5.81599 17.934 3.4375 15 3.4375ZM7.8125 8.75C7.8125 4.78045 11.0305 1.5625 15 1.5625C18.9695 1.5625 22.1875 4.78045 22.1875 8.75C22.1875 12.7195 18.9695 15.9375 15 15.9375C11.0305 15.9375 7.8125 12.7195 7.8125 8.75Z"
              fill="#6C736F"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 18.75C8.68817 18.75 5 21.2954 5 23.75C5 26.2046 8.68817 28.75 15 28.75C21.3118 28.75 25 26.2046 25 23.75C25 21.2954 21.3118 18.75 15 18.75Z"
              fill="#6C736F"
            />
          </svg>
        </button>
      </Link>
      <button className="flex justify-center items-center p-2.5 bg-stone-400 h-[50px] rounded-[100px] w-[50px]">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.1428 8.80951H11.1904V2.85713C11.1904 2.19999 10.6571 1.66666 9.99996 1.66666C9.34282 1.66666 8.80948 2.19999 8.80948 2.85713V8.80951H2.8571C2.19996 8.80951 1.66663 9.34285 1.66663 9.99999C1.66663 10.6571 2.19996 11.1905 2.8571 11.1905H8.80948V17.1428C8.80948 17.8 9.34282 18.3333 9.99996 18.3333C10.6571 18.3333 11.1904 17.8 11.1904 17.1428V11.1905H17.1428C17.8 11.1905 18.3333 10.6571 18.3333 9.99999C18.3333 9.34285 17.8 8.80951 17.1428 8.80951Z"
            fill="white"
          />
        </svg>
      </button>
    </nav>
  );
}
