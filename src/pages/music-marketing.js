import {
  Container,
  Heading,
  Text,
  Divider,
  // Image,
  Link,
} from "@chakra-ui/react";
import axios from "axios";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";

export default function MusicMarketing({ posts }) {
  return (
    <>
      <Head>
      <title>Music Marketing</title>
        <meta
          name="description"
          content="Learn how to build your music brand"
        />

        <meta itemprop="name" content="Music Marketing" />
        <meta
          itemprop="description"
          content="Learn how to build your music brand"
        />
        <meta
          itemprop="image"
          content="http://unlockyoursound.com/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />

        <meta
          property="og:url"
          content="https://uys-js.vercel.app/music-marketing"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Music Marketing" />
        <meta
          property="og:description"
          content="Learn how to build your music brand"
        />
        <meta
          property="og:image"
          content="http://unlockyoursound.com/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Music Marketing" />
        <meta
          name="twitter:description"
          content="Learn how to build your music brand"
        />
        <meta
          name="twitter:image"
          content="http://unlockyoursound.com/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />
      </Head>
      <div className={styles.main}>
        <Container maxW="xl">
          <Nav />
          <Heading size="lg" as="h1">Music Marketing</Heading>
          <Text>Learn how to build your music brand</Text>
          <ul>
            {posts.map((post) => (
              <div key={post.slug}>
                <Link href={`/${post.slug}`} style={{ textDecoration: "none" }}>
                  <Heading as="h3" mb={5}>
                    {post.title}
                  </Heading>
                  <Image
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.title}
                    width={500}
                    height={500}
                  />
                  <Divider mt={10} mb={5} />
                </Link>
              </div>
            ))}
          </ul>
          <Footer />
        </Container>
      </div>
    </>
  );
}

const GET_MARKETING_POSTS = `
      query GetFeaturedPosts {
        posts(first: 1000, where: { categoryId: 277 }) {
          nodes {
            id
            slug
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    `;

export async function getStaticProps() {
  const response = await axios.post("https://unlockyoursound.com/graphql", {
    query: GET_MARKETING_POSTS,
  });
  const posts = response.data.data.posts.nodes;

  return {
    props: {
      posts,
    },
  };
}
