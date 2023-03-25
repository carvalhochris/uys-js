import {
  Container,
  Heading,
  Divider,
  // Link,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function MusicBusiness({ posts }) {
  return (
    <>
      <Head>
        <title>Music Business</title>
        <meta
          name="description"
          content="Read about the ever-evolving business of music"
        />

        <meta itemprop="name" content="Music Business" />
        <meta
          itemprop="description"
          content="Read about the ever-evolving business of music"
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
        <meta property="og:title" content="Music Business" />
        <meta
          property="og:description"
          content="Read about the ever-evolving business of music"
        />
        <meta
          property="og:image"
          content="http://unlockyoursound.com/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Music Business" />
        <meta
          name="twitter:description"
          content="Read about the ever-evolving business of music"
        />
        <meta
          name="twitter:image"
          content="http://unlockyoursound.com/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />
      </Head>

      <div className={styles.main}>
        <Container maxW="xl">
          <Nav />
          <Heading size="lg" as="h1">
            Music Business
          </Heading>
          <Text>Read about the ever-evolving business of music</Text>
          <ul>
            {posts.map((post) => (
              <div key={post.slug}>
                <Link href={`/${post.slug}`} style={{ textDecoration: "none" }}>
                  <Image
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.title}
                    width={500}
                    height={500}
                  />
                  <Heading as="h2" mb={5}>
                    {post.title}
                  </Heading>
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

const GET_BIZ_POSTS = `
    query GetFeaturedPosts {
      posts(first: 1000, where: { categoryId: 279 }) {
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
  const response = await axios.post("https://unlockyoursound.io/graphql", {
    query: GET_BIZ_POSTS,
  });
  const posts = response.data.data.posts.nodes;

  return {
    props: {
      posts,
    },
  };
}
