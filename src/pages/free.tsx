import { Button, Divider, Heading } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import { Container, Text } from "@chakra-ui/react";
import Nav from "@/components/Nav";
import { UnorderedList, ListItem } from "@chakra-ui/react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function FreeResources() {
  return (
    <>
      <Head>
        <title>Free Resources</title>
        <meta
          name="description"
          content="Unlock a bundle of free resources to help you create and release your music"
        />

        <meta itemProp="name" content="Free Resources" />
        <meta
          itemProp="description"
          content="Unlock a bundle of free resources to help you create and release your music"
        />
        <meta
          itemProp="image"
          content="http://unlockyoursound.io/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />
        <link rel="canonical" href={`https://unlockyoursound.com/free`} />
        <meta property="og:url" content="https://unlockyoursound.com/free" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Free Resources" />
        <meta
          property="og:description"
          content="Unlock a bundle of free resources to help you create and release your music"
        />
        <meta
          property="og:image"
          content="http://unlockyoursound.io/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Resources" />
        <meta
          name="twitter:description"
          content="Unlock a bundle of free resources to help you create and release your music"
        />
        <meta
          name="twitter:image"
          content="http://unlockyoursound.io/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />
      </Head>

      <div
      // className={styles.main}
      >
        <Container maxW="xl">
          {/* <Nav /> */}
          <Heading size="3xl" as="h1" lineHeight={1.4} mt={10}>
            Free resources to help you create and release your music
          </Heading>
          <Text mt={10} mb={5} fontSize="xl">
            Join Labs and unlock your free bundle
          </Text>
          <iframe
            src="https://unlockyoursound.substack.com/embed"
            height={350}
            width="100%"
            style={{ border: "solid" }}
          ></iframe>
          <Divider mt={5} mb={5} />
          <Heading as="h2" size="xl" lineHeight={1.4} mt={10} mb={5}>
            Free PDFs
          </Heading>
          <Text mt={10} mb={5} fontSize="xl">
            Your free bundle includes the following PDF guides:{" "}
          </Text>
          <UnorderedList mt={10} mb={5} fontSize="xl">
            <ListItem>Types of Music Royalties</ListItem>
            <ListItem>Email Marketing for Musicians</ListItem>
            <ListItem>Bandcamp + Streaming Album Strategy</ListItem>
            <ListItem>The DIY Music Marketing Model</ListItem>
            <ListItem>Blockchain Opportunities for Musicians</ListItem>
            <ListItem>..and much more!</ListItem>
          </UnorderedList>
          <Divider mt={10} mb={5} />
          <Heading as="h2">Free Mix Review</Heading>
          <Text mt={10} mb={5} fontSize="xl">
            We also offer a Free Mix Feedback Service where you can have your
            mix reviewed by working audio engineers.
          </Text>
          <Link
            href="/free-mix-feedback"
            // legacyBehavior
            // style={{ position: "relative" }}
          >
            {/* <a className="no-js" style={{ textDecoration: "none" }}> */}
            <Button
              mt={10}
              mb={50}
              size="lg"
              borderColor="grey"
              variant="outline"
              backgroundColor="#7756E3"
              color="white"
            >
              Get Feedback
            </Button>
            {/* </a> */}
          </Link>
          <Divider mt={5} mb={5} />
          {/* <Footer /> */}
        </Container>
      </div>
    </>
  );
}
