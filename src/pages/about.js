import axios from "axios";
import { Container, Heading } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function About({ pageContent }) {
  return (
    <div className={styles.main}>
      <Container maxW="xl">
        <Heading>Christopher Carvalho</Heading>
        <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      {/* <li>
        <Link href="/blog/hello-world">Blog Post</Link>
      </li> */}
    </ul>
        <div style={{ padding: "10px" }} dangerouslySetInnerHTML={{ __html: pageContent }}></div>
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios.get("https://unlockyoursound.com/wp-json/wp/v2/pages/14091");
  const pageContent = response.data.content.rendered;
  return {
    props: {
      pageContent,
    },
  };
}
