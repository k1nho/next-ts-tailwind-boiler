import React from "react";
import Link  from "next/link"

interface Iprops {
  toggle: () => void;
  isOpen: boolean;
}

export const Navbar: React.FC<Iprops> = ({ toggle, isOpen }) => {
  return (
    <div className="bg-gray-900 sticky top-0 z-50">
      <div className="flex justify-between md:justify-around mx-auto w-10/12 py-4 text-white">
        <h1 className="text-2xl md:text-3xl font-logo hover:text-pink-800 transition duration-200 cursor-pointer focus:text-pink-800 focus:outline-none">
          <Link href ="/">
            My Page
          </Link>
        </h1>
        <div className="px-4 cursor-pointer md:hidden " onClick={toggle}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
        <div className="text-base space-x-10 font-body md:block hidden py-1">
          <Link href ="/">
            Home
          </Link>
          <Link href ="/page1">
            Page1
          </Link>
          <Link href ="/page2">
            Page2
          </Link>
          <Link href ="/page3">
            Page3
          </Link>
        </div>
      </div>
    </div>
  );
};