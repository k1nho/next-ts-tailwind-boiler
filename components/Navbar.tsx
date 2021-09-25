import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

interface Iprops {
  toggle: () => void;
  isOpen: boolean;
}

export const Navbar: React.FC<Iprops> = ({ toggle, isOpen }) => {
  const [session, loading] = useSession();

  let authButton = (
    <button
      onClick={() => signIn()}
      className="btnbasic bg-green-500 hover:bg-green-600"
    >
      Log In
    </button>
  );

  if (!session) {
    authButton = (
      <button
        onClick={() => signIn()}
        className="btnbasic bg-green-500 hover:bg-green-600"
      >
        Log In
      </button>
    );
  }
  if (session) {
    authButton = (
      <button
        onClick={() => signOut()}
        className="btnbasic bg-red-500 hover:bg-red-600"
      >
        Log Out
      </button>
    );
  }
  return (
    <div className="navColor sticky top-0 z-50 bg-gray-800">
      <div className="flex items-center justify-between md:justify-between mx-auto w-10/12 py-4 navTextColor">
        <h1 className="navTitle">
          <Link href="/">My Page</Link>
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
          <Link href="/">
            <a className="focusText">Home</a>
          </Link>
          <Link href="/page1">
            <a className="focusText">Page1</a>
          </Link>
          <Link href="/page2">
            <a className="focusText">Page2</a>
          </Link>
          <Link href="/page3">
            <a className="focusText">Page3</a>
          </Link>
          {authButton}
        </div>
      </div>
    </div>
  );
};
