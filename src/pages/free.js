import { Button, Divider, Heading } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import { Container, Text } from "@chakra-ui/react";
import Nav from "@/components/Nav";
import { UnorderedList, ListItem } from "@chakra-ui/react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function FreeResources() {
  return (
    <div className={styles.main}>
      <Container maxW="xl">
        <Nav />
        <Heading as="h1">
          Free resources to help you create and release your music
        </Heading>
        <Text>Join Labs and unlock your free bundle</Text>
        <iframe
          src="https://unlockyoursound.substack.com/embed"
          height={350}
          width='100%'
          style={{ border: "solid" }}
        ></iframe>
        {/* <Text>Coming soon...</Text> */}
        {/* <Container> */}
        <Divider mt={5} mb={5} />
        <Heading as="h2">Free PDFs</Heading>
        Your free bundle includes the following PDF guides:
        <UnorderedList>
          <ListItem>Types of Music Royalties</ListItem>
          <ListItem>Email Marketing for Musicians</ListItem>
          <ListItem>Bandcamp + Streaming Album Strategy</ListItem>
          <ListItem>The DIY Music Marketing Model</ListItem>
          <ListItem>Blockchain Opportunities for Musicians</ListItem>
          <ListItem>..and much more!</ListItem>
        </UnorderedList>
        <Divider mt={5} mb={5} />
        <Heading as="h2">Free Mix Review</Heading> We also offer a Free Mix
        Feedback Service where you can have your mix reviewed by working audio
        engineers.
        <Link href="/free" legacyBehavior style={{ position: "relative" }}>
          <Button
            // type="submit"
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
        </Link>
        <Divider mt={5} mb={5} />
        <Footer />
        {/* </Container> */}
      </Container>
    </div>
  );
}
