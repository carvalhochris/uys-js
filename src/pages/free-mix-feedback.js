import { Heading, Text, Link, Button, Container } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/Nav";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Head from "next/head";
import Footer from "@/components/Footer";

export default function MixFeedback() {
  return (
    <>
      <Head>
        <title>Free Mix Feedback</title>
        <meta
          name="description"
          content="Get a constructive mix review from a working audio engineer"
        />
        <meta name="keywords" content="Music production, business, marketing" />
        <meta property="og:title" content="Free Mix Feedback" />
        <meta
          property="og:description"
          content="Get a constructive mix review from a working audio engineer"
        />
        <meta
          property="og:image"
          content="http://unlockyoursound.com/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />
        <meta
          property="og:url"
          content="http://unlockyoursound.com/free-mix-feedback"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Unlock Your Sound" />
        <meta
          name="twitter:description"
          content="The Artist Self-Development Platform"
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
            {/* Also, keep an eye on your spam folder, just in case! <br></br><br></br> */}
            We look forward to hearing your music.
          </Text>
          <Link
            isExternal
            href="https://docs.google.com/forms/d/e/1FAIpQLSeUOV5KF1VWDBiuNTv91tYza2LKOIOcttbUqjWOSCpcafVnDg/viewform?usp=sf_link"
          >
            <Button
              mt={10}
              // mt={6}
              mb={5}
              size="lg"
              borderColor="grey"
              variant="outline"
              backgroundColor="#7756E3"
              color="white"
            >
              Submit Mix
              <ExternalLinkIcon mx="2px" />
            </Button>
          </Link>
          <Footer />
        </Container>
      </div>
    </>
  );
}
