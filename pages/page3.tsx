// @ts-ignore
import { Post } from ".prisma/client";
import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import prisma from "../lib/prisma";

export default function page3({
  feed,
}: {
  feed: (Post & {
    author: {
      name: string | null;
    } | null;
  })[];
}) {
  return (
    <div className="min-h-screen ">
      <Head>
        <title>page 3</title>
        <meta charSet="utf-8" />
        <meta name=" author" content="default author" />
        <meta name="description" content=" page 3 description " />
      </Head>
      <div className="grid grid-cols-12 justify-items-center items-center">
        {feed.map((post) => (
          <div
            key={post.id}
            className="col-span-4 bg-white shadow-xl p-5 rounded-xl grid grid-cols-12 space-y-2"
          >
            <div className="col-span-12 font-bold">
              <Link href={`/p/${post.id}`}>{post.title}</Link>
            </div>
            <div className="col-span-12 font-semibold">
              By {post.author?.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const feed: Post[] | undefined = await prisma?.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return { props: { feed } };
};
