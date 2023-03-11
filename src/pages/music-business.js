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

export default function MusicBusiness({ posts }) {
  return (
    <>
      <Head>
        <title>Music Business</title>
        <meta
          name="description"
          content="The Artist Self-Development Platform"
        />
        <meta name="keywords" content="Music production, business, marketing" />
        <meta property="og:title" content="Unlock Your Sound" />
        <meta
          property="og:description"
          content="The Artist Self-Development Platform"
        />
        <meta
          property="og:image"
          content="http://unlockyoursound.com/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />
        <meta property="og:url" content="http://unlockyoursound.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Unlock Your Sound" />
        <meta
          name="twitter:description"
          content="The Artist Self-Development Platform"
        />
        <meta
          name="twitter:image"
          content="http://unlockyoursound.com/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    
  
    <div className={styles.main}>
      <Container maxW="xl">
        <Nav />
        <Heading size="md">Music Business</Heading>
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
  const response = await axios.post("https://unlockyoursound.com/graphql", {
    query: GET_BIZ_POSTS,
  });
  const posts = response.data.data.posts.nodes;

  return {
    props: {
      posts,
    },
  };
}
