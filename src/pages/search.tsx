import { Container, Divider, Text } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import Search from "@/components/SearchBox";
import Nav from "@/components/Nav";
import Head from "next/head";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Image as ChakraImage } from "@chakra-ui/react";

import Link from "next/link";
import { Button, Box } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

export default function SearchPage() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Search</title>
        <meta
          name="description"
          content="Dive in to our ever-growing archives"
        />
        <meta name="keywords" content="Music production, business, marketing" />
        <link
          rel="canonical"
          href={`https://unlockyoursound.com/search`}
        />
        <meta property="og:title" content="Search" />
        <meta
          property="og:description"
          content="Dive in to our ever-growing archives"
        />
        <meta
          property="og:image"
          content="http://unlockyoursound.io/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />
        <meta property="og:url" content="http://unlockyoursound.com/search" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Search" />
        <meta
          name="twitter:description"
          content="Dive in to our ever-growing archives"
        />
        <meta
          name="twitter:image"
          content="http://unlockyoursound.io/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div 
      // className={styles.main}
      >
        <Box mb={300}>
          <Search />
        </Box>
      </div>
    </>
  );
}
