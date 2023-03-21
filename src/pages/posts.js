import Link from "next/link";
import { Container } from "@chakra-ui/react";
import axios from "axios";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/Nav";
import { Divider, Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Footer from "@/components/Footer";

const GET_ALL_POSTS = `
  query GetAllPosts {
    posts(first: 1000) {
      nodes {
        id
        slug
        title
      }
    }
  }
`;

export default function Posts({ posts }) {
  return (
    <div className={styles.main}>
      <Container maxW="xl">
        <Nav />
        <div>
          {posts.map((post) => (
            <div key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <Heading as="h2">{post.title}</Heading>
                <Divider mt={5} mb={5} />
              </Link>
            </div>
          ))}
        </div>
        <Footer />
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios.post("https://unlockyoursound.io/graphql", {
    query: GET_ALL_POSTS,
  });
  const posts = response.data.data.posts.nodes;

  return {
    props: {
      posts,
    },
  };
}
