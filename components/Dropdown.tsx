import { signIn, signOut, useSession } from "next-auth/client";
import Link from "next/link"

interface Iprops {
  toggle: () => void;
  isOpen: boolean;
}

export const Dropdown: React.FC<Iprops> = ({ isOpen, toggle }) => {

    const [session, loading] = useSession();

  let authButton = (<button onClick= {() => signIn()} className="btnbasic">Log In</button>)

  if(!session){

     authButton = (<button onClick= {() => signIn()} className="btnbasic">Log In</button>)
  }
  if(session){
    
     authButton = (<button onClick= {() => signOut()} className="btnbasic">Log Out</button>)
  }
  return (
    <div
      className={
        isOpen
          ? "flex  flex-col items-center justify-center navColor navTextColor font-body sticky top-12 z-50 space-y-3"
          : "hidden"
      }
      onClick={toggle}
    >
      <div className="flex space-x-2">
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
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        <Link href="/">
          <button className="focusText">Home</button>
        </Link>
      </div>
      <div className="flex space-x-2">
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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
        <Link href="/page1">
          <button className="focusText">Page 1</button>
        </Link>
      </div>

      <div className="flex space-x-2">
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
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
        <Link href="/page2">
          <button className="focusText">Page 2</button>
        </Link>
      </div>

      <div className="flex space-x-2">
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
        <Link href="/page3">
          <button className="focusText">Page 3</button>
        </Link>
      </div>

      <div className="flex"> 
        {authButton}
      </div>
      <br />
    </div>
  );
};