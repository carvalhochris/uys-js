import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import SubmitMix from "@/components/SubmitMix";
import { Divider, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

export default function MixFeedback() {
  return (
    <>
      <Head>
        <title>Free Mix Feedback</title>
        <meta
          name="description"
          content="Get a constructive mix review from a working audio engineer"
        />
        <meta itemProp="name" content="Free Mix Feedback" />
        <meta
          itemProp="description"
          content="Get a constructive mix review from a working audio engineer"
        />
        <link
          rel="canonical"
          href={`https://unlockyoursound.com/free-mix-feedback`}
        />
        <meta
          itemProp="image"
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
      <div>
        <Nav />
        <Heading as="h1" size="3xl" lineHeight={1.4} mt={10} mb={5}>
          Free Mix Feedback
        </Heading>
        <Text mt={10} mb={5} fontSize="xl">
          Submit your mix to get constructive feedback from a working audio
          engineer.<br></br>
          <br></br>
          We’ll get back to you as soon as we can.<br></br>
          <br></br>
          We ask that you use a service such as Dropbox to upload files so that
          we can stream the file but also have the option to download if
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
        <Text mt={10} mb={5} fontSize="xl">
          Did you know that we also offer a bunch of <b>free resources</b> to
          help you create and release your music?
        </Text>
        <Link href="/free">
          <Text mt={10} mb={5} fontSize="xl">
            <u>Learn more</u>
          </Text>
        </Link>
        <Footer />
      </div>
    </>
  );
}
