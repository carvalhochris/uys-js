import {
  Heading,
  Text,
  Link,
  Button,
  Container,
  Divider,
} from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/Nav";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Head from "next/head";
import Footer from "@/components/Footer";
import SubmitMix from "@/components/SubmitMix";

export default function MixFeedback() {
  return (
    <>
      <Head>
        <title>Free Mix Feedback</title>
        <meta
          name="description"
          content="Get a constructive mix review from a working audio engineer"
        />

        <meta itemprop="name" content="Free Mix Feedback" />
        <meta
          itemprop="description"
          content="Get a constructive mix review from a working audio engineer"
        />
        <link
          rel="canonical"
          href={`https://unlockyoursound.com/free-mix-feedback`}
        />

        <meta
          itemprop="image"
          content="http://unlockyoursound.io/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />

        <meta
          property="og:url"
          content="https://unlockyoursound.com/free-mix-feedback"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Free Mix Feedback" />
        <meta
          property="og:description"
          content="Get a constructive mix review from a working audio engineer"
        />
        <meta
          property="og:image"
          content="http://unlockyoursound.io/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Mix Feedback" />
        <meta
          name="twitter:description"
          content="Get a constructive mix review from a working audio engineer"
        />
        <meta
          name="twitter:image"
          content="http://unlockyoursound.io/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />
      </Head>
      <div className={styles.main}>
        <Container maxW="xl">
          <Nav />
          <Heading as="h1">Free Mix Feedback</Heading>
          <Text>
            Submit your mix to get constructive feedback from a working audio
            engineer.<br></br>
            <br></br>
            We’ll get back to you as soon as we can.<br></br>
            <br></br>
            We ask that you use a service such as Dropbox to upload files so
            that we can stream the file but also have the option to download if
            necessary.<br></br>
            <br></br>
            Supported formats: aiff, wav, flac. <br></br>
            <br></br>We do not accept links from streaming services.<br></br>
            <br></br>
            Please only submit ONE song/track.<br></br>
            <br></br>
            We look forward to hearing your music.
            <br></br>
          </Text>
          <SubmitMix />
          <Divider />
          <Text>
            Did you know that we also offer a bunch of <b>free resources</b> to help
            you create and release your music?
          </Text>
          <Link href="/free">
            <Text>Learn more</Text>
          </Link>
          {/* <<Heading>Free resources</Heading>
                    <iframe
            src="https://unlockyoursound.substack.com/embed"
            height={350}
            width="100%"
            style={{ border: "solid" }}
          ></iframe>> */}
          <Footer />
        </Container>
      </div>
    </>
  );
}
