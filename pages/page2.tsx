import type { NextPage } from "next";
import Head from "next/head";
import { Container2 } from "../components/Container2";

const page2: NextPage = () => {
  return (
    <div className="min-h-screen ">
      <Head>
        <title>page 2</title>
        <meta charSet="utf-8" />
        <meta name=" author" content="default author" />
        <meta name="description" content=" page 2 description " />
      </Head>
      <Container2 />
      This is page 2
    </div>
  );
};

export default page2;
