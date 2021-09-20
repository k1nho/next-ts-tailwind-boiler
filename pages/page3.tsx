 import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { useEffect, useState } from 'react'
import { Dropdown } from '../components/Dropdown'
import prisma from '../lib/prisma'
import { Post } from '.prisma/client'
import Link from "next/link"

export default function page3({feed}: {feed : (Post & {
    author: {
        name: string | null;
    } | null;
})[]}){


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
    <div className= "min-h-screen ">
      <Head>
        <title>Kin page 3</title>
        <meta charSet="utf-8" />
        <meta name=" author" content="Kin Hong NG" />
        <meta
          name="description"
          content=" page 3 description "
        />
      </Head>
      <div className= "grid grid-cols-12 justify-items-center items-center">
        {feed.map((post)=>(
          <div key ={post.id} className ="col-span-4 bg-white shadow-xl p-5 rounded-xl grid grid-cols-12 space-y-2">
            <div className="col-span-12 font-bold">
              <Link href ={`/p/${post.id}`}>{post.title}</Link>
            </div>
            <div className="col-span-12 font-semibold">

               By {post.author?.name}
            </div>
            <div className ="col-span-8">
              {post.content}
            </div>
            
               
            
          </div>
        ))}
      </div>

    </div>
  )
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


