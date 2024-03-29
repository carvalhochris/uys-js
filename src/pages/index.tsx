import { Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
// import styles from "@/styles/Home.module.css";
// import Nav from "@/components/Nav";
import { Divider } from "@chakra-ui/react";
// import Footer from "@/components/Footer";

import { Button, useColorMode } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
// import TopicBox from "@/components/TopicBox";
import TopicBox from "../components/TopicBox";
// import Example from "@/components/Command";

interface PostProp {
  title: string;
  slug: string;
  seo: {
    metaDesc: string;
  };
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
}

interface HomeProps {
  posts: PostProp[];
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
      <div
      // className={styles.main}
      >
        {/* <Container maxW="xl"> */}
        {/* <Nav /> */}
        <Heading size="3xl" as="h1" lineHeight={1.4} mt={10}>
          {/* <div className="bg-[linear-gradient(to_right,theme(colors.violet.900),theme(colors.violet.500),theme(colors.violet.700),theme(colors.violet.700),theme(colors.violet.700),theme(colors.violet.800),theme(colors.violet.900))] inline-block text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient">
            self-development
          </div> */}
          Unlock Your Sound is an artist
          self-development 
          platform
        </Heading>
        <Divider mt={5} mb={5} />
        <Text mt={10} mb={5} fontSize='xl'>
          Access a bundle of free resources to help you create and release
          your music
        </Text>

        <Link
          href="/free"
        // legacyBehavior style={{ position: "relative" }}
        >
          {/* <a className="no-js" style={{ textDecoration: "none" }}> */}
          <Button
            // type="submit"
            mt={6}
            mb={0}
            size="lg"
            borderColor="grey"
            variant="outline"
            backgroundColor="#7756E3"
            color="white"
          >
            {/* Unlock Resources{" "} */}
            {/* <div className="mr-2 ml-2 bg-[linear-gradient(to_right,theme(colors.violet.900),theme(colors.violet.500),theme(colors.violet.700),theme(colors.violet.700),theme(colors.violet.700),theme(colors.violet.800),theme(colors.violet.900))] inline-block text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient"> */}
            Unlock Resources
            {/* </div> */}

          </Button>
          {/* </a> */}
        </Link>
        <Divider mt={10} mb={10} />
        {/* <Example /> */}
        {/* <Link href="/" legacyBehavior style={{ position: "relative" }}>
          <GrHomeOption
            style={{ position: "fixed", bottom: "20px", right: "20px" }}
            size={30}
          />
          </Link> */}
        {/* </Container> */}
        <div
        // className={styles.main}
        >
          {/* <Container maxW="xl"> */}
          {/* <Search /> */}
          <TopicBox />
          {/* <Nav /> */}
          <Divider mt={10} mb={5} />
          <Heading mt={10} mb={5}>
            Featured Content
          </Heading>
          <Text mt={5} mb={5}>
            The hall of fame
          </Text>
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
                    // mt={10}
                    />
                  )}
                  <Heading as="h3" mb={5} mt={5}>
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
          {/* <Footer /> */}
          {/* </Container> */}
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
  const response = await fetch("https://unlockyoursound.io/graphql", {
    body: JSON.stringify({
      query: GET_FEATURED_POSTS,
    }),
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  const jay = await response.json();
  const posts = await jay.data.posts.nodes;

  return {
    props: {
      posts,
    },
  };
}

// redeploy
