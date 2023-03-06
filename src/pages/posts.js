import Link from "next/link";
import { Container } from "@chakra-ui/react";
import axios from "axios";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/Nav";
import { Divider } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export default function Posts({ posts }) {
  return (
    <div className={styles.main}>
      <Container maxW="xl">
        <Nav />
        <Divider mt={5} mb={5} />
        <div>
          {posts.map((post) => (
            <div key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <Text as="u">{post.title.rendered}</Text>
                <Divider mt={5} mb={5} />
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
