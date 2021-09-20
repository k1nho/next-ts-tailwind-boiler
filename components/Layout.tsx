import { Navbar } from "./Navbar"
import { Dropdown } from "./Dropdown"
import { useEffect, useState } from "react";

export const Layout = ({children} :any) => {

     const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // handle screen size larger than medium
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
    return (
        <div>
            <Navbar toggle= {toggle} isOpen= {isOpen}/>
            <Dropdown toggle={toggle} isOpen ={isOpen}/>
            {children}
        </div>
    )
}
