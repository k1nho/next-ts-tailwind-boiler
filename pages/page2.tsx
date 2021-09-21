import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Container3 } from '../components/Container3'
import { Container2 } from '../components/Container2'
import { Navbar } from '../components/Navbar'
import { useEffect, useState } from 'react'
import { Dropdown } from '../components/Dropdown'

const page2: NextPage = () => 

{
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
        <title>page 2</title>
        <meta charSet="utf-8" />
        <meta name=" author" content="Kin Hong NG" />
        <meta
          name="description"
          content=" page 2 description "
        />
      </Head>
     <Container2/>
    This is page 2
    </div>
  )
}

export default page2