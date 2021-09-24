import type { NextPage } from "next";
import Head from "next/head";
// @ts-ignore
import { useEffect, useState } from "react";
import { Container2 } from "../components/Container2";

const page1: NextPage = () => {
  const [user, setUser] = useState("");

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
        <meta name=" author" content="default author" />
        <meta name="description" content=" page 1 description " />
      </Head>
      <Container2 user={user} />
    </div>
  );
};

export default page1;
