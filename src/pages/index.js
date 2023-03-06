import Link from "next/link";
import { Container, Heading, Text, Center } from "@chakra-ui/react";
import axios from "axios";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/Nav";
import { Divider } from "@chakra-ui/react";

export default function Home({ posts }) {
  return (
    <div className={styles.main}>
      <Container maxW="xl">
        <Nav />
        <Heading as="h1">
          Unlock Your Sound is an artist self-development platform
        </Heading>
        <Divider mt={5} mb={5} />

        <Divider mt={5} mb={5} />

        <Text>
          Unlock a bundle of free resources to help you create and release your
          music
        </Text>
        <Divider mt={5} mb={5} />

        <Center>
          <iframe
            src="https://unlockyoursound.substack.com/embed"
            width="480"
            height="320"
            style={{
              border: "1px solid #EEE",
              // background: "#000000",
              // color: "white",
            }}
            frameborder="0"
            scrolling="no"
          ></iframe>
        </Center>
        <Divider mt={5} mb={5} />
        <div>
          {posts.map((post) => (
            <div key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <span>{post.title.rendered}</span>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    "https://unlockyoursound.com/wp-json/wp/v2/posts"
  );
  const posts = response.data;

  return {
    props: {
      posts,
    },
  };
}
