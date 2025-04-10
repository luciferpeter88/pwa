import React, { useState } from "react";
import Menu from "./Menu";
export default function NavigationHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <React.Fragment>
      {isMenuOpen ? <Menu setIsMenuOpen={setIsMenuOpen} /> : null}

      <nav className="p-3 w-full" onClick={() => setIsMenuOpen(true)}>
        <button className="flex gap-2.5 items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 17.9167C12 18.515 11.515 19 10.9167 19H3.08333C2.48503 19 2 18.515 2 17.9167C2 17.3184 2.48502 16.8333 3.08333 16.8333H10.9167C11.515 16.8333 12 17.3184 12 17.9167ZM22 12.5C22 13.0983 21.515 13.5833 20.9167 13.5833H3.08333C2.48502 13.5833 2 13.0983 2 12.5C2 11.9017 2.48502 11.4167 3.08333 11.4167H20.9167C21.515 11.4167 22 11.9017 22 12.5ZM22 7.08333C22 7.68164 21.515 8.16667 20.9167 8.16667H13.0833C12.485 8.16667 12 7.68164 12 7.08333C12 6.48502 12.485 6 13.0833 6H20.9167C21.515 6 22 6.48502 22 7.08333Z"
              fill="white"
            />
          </svg>
        </button>
      </nav>
    </React.Fragment>
  );
}
