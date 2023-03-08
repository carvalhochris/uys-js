import axios from "axios";
import { Container, Heading } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Nav from "@/components/Nav";
import { Divider } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Footer from "@/components/Footer";

const GET_FEATURED_POSTS = `
  query GetFeaturedPosts {
    posts(first: 100, where: { categoryId: 322 }) {
      nodes {
        id
        slug
        title
      }
    }
  }
`;

export default function FeaturedPosts({ posts }) {
  return (
    <div className={styles.main}>
      <Container maxW="xl">
        <Nav />
        <Heading>Featured Posts</Heading>
        <Divider mt={5} mb={5} />
        <ul>
          {posts.map((post) => (
            <div key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <Text as="u">{post.title}</Text>
                <Divider mt={5} mb={5} />
              </Link>
            </div>
          ))}
        </ul>
        {/* <Footer /> */}
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios.post(
    "https://unlockyoursound.com/graphql",
    {
      query: GET_FEATURED_POSTS,
    }
  );
  const posts = response.data.data.posts.nodes;

  return {
    props: {
      posts,
    },
  };
}
