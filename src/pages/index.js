import Link from "next/link";
import { Container, Heading, Text, Center } from "@chakra-ui/react";
import axios from "axios";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/Nav";
import { Divider } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import Image from 'next/image';

export default function Home({ posts }) {

  return (
    <div className={styles.main}>
      <Container maxW="xl">
        <Nav />
        <Heading as="h1">
          Unlock Your Sound is an artist self-development platform
        </Heading>
        <Divider mt={5} mb={5} />
        <Text>
          Unlock a bundle of free resources to help you create and release your
          music
        </Text>
        <Center>
          <iframe
            src="https://unlockyoursound.substack.com/embed"
            width="100%"
            height="320"
            style={{
              border: "1px solid #EEE",
            }}
            frameborder="0"
            scrolling="no"
          ></iframe>
        </Center>
        <Divider mt={5} mb={5} />
      </Container>
      <div className={styles.main}>
        <Container maxW="xl">
          {/* <Nav /> */}
          <Heading>Featured Content</Heading>
          <Text>The hall of fame</Text>
          <Divider mt={10} mb={5} />
          <ul>
            {posts.map((post) => (
              <div key={post.slug} >
                <Link href={`/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <Heading as="h3" mb={5}>{post.title}</Heading>
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
    </div>
  );
}

const GET_FEATURED_POSTS = `
  query GetFeaturedPosts {
    posts(first: 100, where: { categoryId: 322 }) {
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
    query: GET_FEATURED_POSTS,
  });
  const posts = response.data.data.posts.nodes;

  return {
    props: {
      posts,
    },
  };
}
