import Link from "next/link";
import { Container, Heading, Text, Center } from "@chakra-ui/react";
import axios from "axios";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/Nav";
import { Divider } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import Image from "next/image";
import Search from "../components/SearchBox";
import { useColorMode } from "@chakra-ui/react";
import Head from "next/head";
import CustomSubstackWidget from "@/components/CustomSubstackWidget";

export default function Home({ posts }) {
  const { colorMode } = useColorMode();

  return (
    <div className={styles.main}>
      <Container maxW="xl">
        <Nav />
        <Heading as="h1">
          Unlock Your Sound is an artist self-development platform
        </Heading>
        <Divider mt={5} mb={5} />
        <Text>
          Access a bundle of free resources to help you create and release your
          music
        </Text>
        <Head>
          <script src="https://substackapi.com/widget.js" async></script>
        </Head>
        {/* <CustomSubstackWidget /> */}
        <Center>
          {/* {colorMode === "light" ? (
            <iframe src="https://unlockyoursound.substack.com/embed"></iframe>
          ) : (
            <iframe src="https://unlockyoursound.substack.com/embed" height={350} width={600} style={{backgroundColor: 'black'}} ></iframe>
          )} */}
          <iframe
            src="https://unlockyoursound.substack.com/embed"
            height={350}
            width={600}
            style={{ border: "solid" }}
          ></iframe>
        </Center>
        {/* <Divider mt={5} mb={5} /> */}
      </Container>
      <div className={styles.main}>
        <Container maxW="xl">
          <Search />
          {/* <Nav /> */}
          <Divider mt={10} mb={5} />
          <Heading>Featured Content</Heading>
          <Text>The hall of fame</Text>
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
                  {/* <Divider mt={10} mb={5} /> */}
                </Link>
                <Divider mt={10} mb={5} />

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
    posts(first: 1000, where: { categoryId: 322 }) {
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
