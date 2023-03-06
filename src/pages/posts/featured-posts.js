import axios from "axios";
import { Container, Heading } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Nav from "@/components/Nav";

export default function FeaturedPosts({ posts }) {
  return (
    <div className={styles.main}>
      <Container maxW="xl">
        <Nav />
        <Heading>Featured Posts</Heading>
        <ul>
          {posts.map((post) => (
            <div key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <span>{post.title.rendered}</span>
              </Link>
            </div>
          ))}
        </ul>
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
