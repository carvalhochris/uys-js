import Link from "next/link";
import { Container, Heading, Text, Center } from "@chakra-ui/react";
import axios from "axios";
import styles from "@/styles/Home.module.css";
// import Nav from "@/components/Nav";
import Nav from "../components/Nav";
import { Divider } from "@chakra-ui/react";
// import Footer from "@/components/Footer";
import Footer from "../components/Footer";

import Image from "next/image";
import Search from "../components/SearchBox";
import { useColorMode } from "@chakra-ui/react";
import Head from "next/head";
import { Button, Box } from "@chakra-ui/react";
import { GrHomeOption } from "react-icons/gr";
// import TopicBox from "@/components/TopicBox";
import TopicBox from "../components/TopicBox";
// import Example from "@/components/Command";
import Example from "../components/Command";
import React from "react";

interface PostProp {
  title: string,
  slug: string,
  seo: {
    metaDesc: string,
  }
  featuredImage: {
    node: {
      sourceUrl: string,
    }
  }
}

interface HomeProps {
  posts: PostProp[]
}

export default function Home({ posts }: HomeProps) {
  const { colorMode } = useColorMode();
  const textColor = colorMode === "dark" ? "gray.300" : "gray.800";
  const headingColor = colorMode === "dark" ? "gray.300" : "gray.900";

  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>Unlock Your Sound</title>
        <meta
          name="description"
          content="The artist self-development platform"
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content="Unlock Your Sound" />
        <meta
          itemProp="description"
          content="The artist self-development platform"
        />
        <meta
          itemProp="image"
          content="http://unlockyoursound.io/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />
        <link rel="canonical" href={`https://unlockyoursound.com/`} />
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://unlockyoursound.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Unlock Your Sound" />
        <meta
          property="og:description"
          content="The artist self-development platform"
        />
        <meta
          property="og:image"
          content="http://unlockyoursound.io/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Unlock Your Sound" />
        <meta
          name="twitter:description"
          content="The artist self-development platform"
        />
        <meta
          name="twitter:image"
          content="http://unlockyoursound.io/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />

        {/* <!-- Meta Tags Generated via http://heymeta.com --> */}
      </Head>
      <div className={styles.main}>
        <Container maxW="xl">
          <Nav />
          <Heading as="h1">
            Unlock Your Sound is an artist self-development platform
          </Heading>
          <Divider mt={5} mb={5} />
          <Text>
            Access a bundle of free resources to help you create and release
            your music
          </Text>
          <Link href="/free" legacyBehavior style={{ position: "relative" }}>
            <a className="no-js" style={{ textDecoration: "none" }}>
              <Button
                // type="submit"
                mt={6}
                mb={5}
                size="lg"
                borderColor="grey"
                variant="outline"
                backgroundColor="#7756E3"
                color="white"
              >
                Unlock Resources{" "}
              </Button>
            </a>
          </Link>
          <Divider mt={100} mb={10} />
          <Example />
          {/* <Link href="/" legacyBehavior style={{ position: "relative" }}>
          <GrHomeOption
            style={{ position: "fixed", bottom: "20px", right: "20px" }}
            size={30}
          />
          </Link> */}
        </Container>
        <div className={styles.main}>
          <Container maxW="xl">
            {/* <Search /> */}
            <TopicBox />
            {/* <Nav /> */}
            <Divider mt={10} mb={5} />
            <Heading>Featured Content</Heading>
            <Text>The hall of fame</Text>
            <ul>
              {posts.map((post) => (
                <div key={post.slug}>
                  <Link
                    href={`/${post.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    {/* <Box bg="#RRGGBB" w={500} p={0} h={350} color="white"> */}
                    {post.featuredImage && (
                      <Image
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.title}
                        width={1000}
                        height={1000}
                      />
                    )}
                    <Heading as="h3" mb={5}>
                      {post.title}
                    </Heading>
                    {/* <Divider mt={10} mb={5} /> */}
                    {/* </Box> */}
                  </Link>
                  <Text fontSize="lg" color={textColor}>
                    {post.seo.metaDesc}
                  </Text>
                  <Link
                    href={`/${post.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Text fontSize="lg">
                      <Button
                        // type="submit"
                        mt={6}
                        mb={5}
                        size="md"
                        borderColor="grey"
                        variant="outline"
                        backgroundColor="#000000"
                        color="white"
                      >
                        Read on
                      </Button>
                    </Text>
                  </Link>
                  <Divider mt={10} mb={5} />
                </div>
              ))}
            </ul>
            <iframe
              src="https://unlockyoursound.substack.com/embed"
              height={350}
              width="100%"
              style={{ border: "solid" }}
            ></iframe>
            <Footer />
          </Container>
        </div>
      </div>
    </>
  );
}

const GET_FEATURED_POSTS = `
  query GetFeaturedPosts {
    posts(first: 1000, where: { categoryId: 322 }) {
      nodes {
        id
        slug
        title
        seo {
          metaDesc
        }
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
    query: GET_FEATURED_POSTS,
  });
  const posts = response.data.data.posts.nodes;

  return {
    props: {
      posts,
    },
  };
}

// redeploy