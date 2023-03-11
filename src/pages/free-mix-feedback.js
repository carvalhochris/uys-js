import { Heading, Text, Link, Button, Container } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/Nav";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function MixFeedback() {
  return (
    <>
      <div className={styles.main}>
        <Container maxW="xl">
          <Nav />
          <Heading as="h1">Free Mix Feedback</Heading>
          <Text>
            Submit your mix to get constructive feedback from a working audio
            engineer for a constructive review.{" "}
            <Text>We’ll get back to you as soon as we can.</Text>{" "}
            <Text>
              We ask that you use a service such as Dropbox to upload files so
              that we can stream the file but also have the option to download
              if necessary.
            </Text>{" "}
            Supported formats: aiff, wav, flac. No Soundcloud or YouTube links.{" "}
            <Text>Please only submit ONE song/track.</Text>
            Also, keep an eye on your spam folder, just in case! We look forward
            to hearing your music.
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
        </Container>
      </div>
    </>
  );
}
