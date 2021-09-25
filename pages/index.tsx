import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Container3 } from "../components/Container3";
import { Container2 } from "../components/Container2";
import { Navbar } from "../components/Navbar";
import { useEffect, useState } from "react";
import { Dropdown } from "../components/Dropdown";
import Login from "../components/login";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen ">
      <Head>
        <title>Home</title>
        <meta charSet="utf-8" />
        <meta name=" author" content="author" />
        <meta
          name="google-signin-client_id"
          content={`${process.env.GOOGLE_CLIENT_ID}`}
        />
        <meta name="description" content=" Page description " />
      </Head>

      <Login />
    </div>
  );
};

export default Home;
