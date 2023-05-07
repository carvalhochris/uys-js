import Link from "next/link";
import { Container } from "@chakra-ui/react";
import axios from "axios";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/Nav";
import { Divider, Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import Head from "next/head";

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
    <>
      <Head>
        <title>Posts</title>
        <meta
          name="description"
          content="Dive in to the archives"
        />

        <meta itemprop="name" content="Posts" />
        <meta
          itemprop="description"
          content="Dive in to the archives"
        />
        <meta
          itemprop="image"
          content="http://unlockyoursound.com/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />
        <link
          rel="canonical"
          href={`https://unlockyoursound.com/music-business`}
        />
        <meta
          property="og:url"
          content="https://unlockyoursound.com/music-business"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Posts" />
        <meta
          property="og:description"
          content="Dive in to the archives"
        />
        <meta
          property="og:image"
          content="http://unlockyoursound.com/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Posts" />
        <meta
          name="twitter:description"
          content="Dive in to the archives"
        />
        <meta
          name="twitter:image"
          content="http://unlockyoursound.com/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />
      </Head>

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
    </>
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
