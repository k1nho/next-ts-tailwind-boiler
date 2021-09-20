import type { NextPage } from "next";
import Head from "next/head";
// @ts-ignore
import { useEffect, useState } from "react";
import { Container2 } from "../components/Container2";
import { Dropdown } from "../components/Dropdown";
import { Navbar } from "../components/Navbar";

const page1: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState("");

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

  useEffect(() => {
    const getName = async () => {
      const response = await fetch("/api/get", {
        headers: { Accept: "application/json" },
      });
      const parseResponse = await response.json();
      setUser(parseResponse.name);
    };
    getName();
  }, [user]);

  return (
    <div className="min-h-screen ">
      <Head>
        <title>page 1</title>
        <meta charSet="utf-8" />
        <meta name=" author" content="Kin Hong NG" />
        <meta name="description" content=" page 1 description " />
      </Head>
      <Container2 user={user} />
    </div>
  );
};

export default page1;
