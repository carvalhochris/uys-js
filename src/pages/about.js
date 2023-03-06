import axios from "axios";
import { Container, Heading } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";

export default function About({ pageContent }) {
  return (
    <div className={styles.main}>
      <Container maxW="xl">
        <Heading>Christopher Carvalho</Heading>
        <div style={{ padding: "10px" }} dangerouslySetInnerHTML={{ __html: pageContent }}></div>
      </Container>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("https://unlockyoursound.com/wp-json/wp/v2/pages/14091");
  const pageContent = response.data.content.rendered;
  return {
    props: {
      pageContent,
    },
  };
}
