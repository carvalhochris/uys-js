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
        <title>The Vault</title>
        <meta
          name="description"
          content="Dive in to our ever-growing archives"
        />
        <meta name="keywords" content="Music production, business, marketing" />
        <meta property="og:title" content="The Vault" />
        <meta
          property="og:description"
          content="Dive in to our ever-growing archives"
        />
        <meta
          property="og:image"
          content="http://unlockyoursound.com/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />
        <meta property="og:url" content="http://unlockyoursound.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="The Vault" />
        <meta
          name="twitter:description"
          content="Dive in to our ever-growing archives"
        />
        <meta
          name="twitter:image"
          content="http://unlockyoursound.com/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.main}>
        <Container maxW="xl">
          <Nav />
          {/* <h1>Hello search</h1> */}
          <Search />
          {/* <Text fontSize="md" mb={10}>
            © 2023 Unlock Your Sound Ltd
          </Text> */}
          {/* <Link href="/" legacyBehavior style={{ position: "relative" }}>
            <Box
              boxSize="80px"
              mr={5}
              display="flex"
              alignItems="center"
              cursor="pointer"
            >
              {colorMode === "light" ? (
                <ChakraImage
                  src="https://unlockyoursound.com/wp-content/uploads/2019/05/Unlock-Your-Sound-01.png"
                  alt="Unlock Your Sound light logo"
                  // maxWidth={70}
                />
              ) : (
                <ChakraImage
                  src="https://unlockyoursound.com/wp-content/uploads/2019/05/cropped-cropped-inverted-1-1.png"
                  alt="Unlock Your Sound dark logo"
                  // maxWidth={70}
                />
              )}
            </Box>
          </Link> */}
          {/* <Divider /> */}
          {/* <Footer /> */}
        </Container>
      </div>
    </>
  );
}
