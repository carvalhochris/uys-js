import axios from "axios";
import { Container, Heading } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Nav from "@/components/Nav";
import { Divider } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Footer from "@/components/Footer";

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
              <Text as="u">{post.title.rendered}</Text>
                <Divider mt={5} mb={5} />
              </Link>
            </div>
          ))}
        </ul>
        <Footer />
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    "https://unlockyoursound.com/wp-json/wp/v2/posts?categories=322&per_page=100"
  );
  const posts = response.data;

  return {
    props: {
      posts,
    },
  };
}
