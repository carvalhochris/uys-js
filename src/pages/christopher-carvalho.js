import axios from "axios";
import { Container, Heading } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function About({ pageContent }) {
  return (
    <div className={styles.main}>
      <Container maxW="xl">
        <Nav />
        <Heading ml={0}>Christopher Carvalho</Heading>
        <div
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
          dangerouslySetInnerHTML={{ __html: pageContent }}
        ></div>
        <Footer />
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    "https://unlockyoursound.com/wp-json/wp/v2/pages/14091"
  );
  const pageContent = response.data.content.rendered;
  return {
    props: {
      pageContent,
    },
  };
}
