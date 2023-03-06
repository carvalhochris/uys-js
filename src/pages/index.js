import Link from "next/link";
import { Container, Heading } from "@chakra-ui/react";
import axios from "axios";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/Nav";

export default function Home({ posts }) {
  return (
    <div className={styles.main}>
      <Container maxW="xl">
        <Heading as='h1'>Unlock Your Sound is an artist self-development platform</Heading>
        <Nav />
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
              {/* <Link href="/">Home</Link>
      <Link href="/about">About</Link> */}
                <span>{post.title.rendered}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios.get("https://unlockyoursound.com/wp-json/wp/v2/posts");
  const posts = response.data;

  return {
    props: {
      posts,
    },
  };
}
