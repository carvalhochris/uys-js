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
import { Button } from "@chakra-ui/react";
import { GrHomeOption } from "react-icons/gr"

export default function Home({ posts }) {
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>Unlock Your Sound</title>
        <meta
          name="description"
          content="The Artist Self-Development Platform"
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Unlock Your Sound" />
        <meta
          itemprop="description"
          content="The Artist Self-Development Platform"
        />
        <meta
          itemprop="image"
          content="http://unlockyoursound.com/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://uys-js.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Unlock Your Sound" />
        <meta
          property="og:description"
          content="The Artist Self-Development Platform"
        />
        <meta
          property="og:image"
          content="http://unlockyoursound.com/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Unlock Your Sound" />
        <meta
          name="twitter:description"
          content="The Artist Self-Development Platform"
        />
        <meta
          name="twitter:image"
          content="http://unlockyoursound.com/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
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
          </Link>
          <Divider mt={100} mb={10} />
          {/* <Link href="/" legacyBehavior style={{ position: "relative" }}>
          <GrHomeOption
            style={{ position: "fixed", bottom: "20px", right: "20px" }}
            size={30}
          />
          </Link> */}
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
                  <Link
                    href={`/${post.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Heading as="h3" mb={5}>
                      {post.title}
                    </Heading>
                    <Image
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.title}
                      width={1000}
                      height={1000}
                      objectFit="cover"
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
