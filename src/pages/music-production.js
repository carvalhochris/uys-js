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
  
  export default function MusicProduction({ posts }) {
    return (
      <>
       <Head>
       <title>Music Production</title>
        <meta
          name="description"
          content="Learn how to unlock your sound"
        />

        <meta itemprop="name" content="Music Production" />
        <meta
          itemprop="description"
          content="Learn how to unlock your sound"
        />
        <meta
          itemprop="image"
          content="http://unlockyoursound.com/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />

        <meta
          property="og:url"
          content="https://uys-js.vercel.app/music-production"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Music Production" />
        <meta
          property="og:description"
          content="Learn how to unlock your sound"
        />
        <meta
          property="og:image"
          content="http://unlockyoursound.com/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Music Production" />
        <meta
          name="twitter:description"
          content="Learn how to unlock your sound"
        />
        <meta
          name="twitter:image"
          content="http://unlockyoursound.com/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />
      </Head>
      <div className={styles.main}>
        <Container maxW="xl">
          <Nav />
          <Heading size="md">Music Production</Heading>
          <Text>Learn how to unlock your sound</Text>
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
  
  const GET_PROD_POSTS = `
      query GetFeaturedPosts {
        posts(first: 1000, where: { categoryId: 266 }) {
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
      query: GET_PROD_POSTS,
    });
    const posts = response.data.data.posts.nodes;
  
    return {
      props: {
        posts,
      },
    };
  }
  