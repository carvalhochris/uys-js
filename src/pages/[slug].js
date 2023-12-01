import axios from "axios";
import { Container, Heading } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Nav from "@/components/Nav";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Stack, StackDivider, Box, Text } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import Image from "next/image";
import ShareButton from "@/components/WhatsAppButton";
import Head from "next/head";
import { useColorMode } from "@chakra-ui/react";
import { setTimeout } from "timers/promises";

const GET_POST_BY_SLUG = `
  query GetPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      slug
      content
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
`;

export default function Post({ post }) {
  const { colorMode } = useColorMode();
  const textColor = colorMode === "dark" ? "gray.100" : "gray.900";
  const headingColor = colorMode === "dark" ? "white" : "gray.900";

  return (
    <>
      <Head>
        {/* Facebook Meta Tags */}
        <title>{post.title}</title>
        <meta name="description" content={post.seo?.metaDesc ?? ""} />
        <meta itemprop="name" content={post.title ?? ""} />
        <meta itemprop="description" content={post.seo?.metaDesc ?? ""} />
        {post.featuredImage?.node?.sourceUrl && (
          <meta itemprop="image" content={post.featuredImage.node.sourceUrl} />
        )}
        <link
          rel="canonical"
          href={`https://unlockyoursound.com/${post.slug}`}
        />
        <meta
          property="og:url"
          content={`https://unlockyoursound.com/${post.slug}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={post.title} />
        {post.seo.metaDesc && (
          <meta property="og:description" content={post.seo.metaDesc} />
        )}
        {post.featuredImage?.node?.sourceUrl && (
          <meta
            property="og:image"
            content={post.featuredImage.node.sourceUrl}
          />
        )}
        <meta property="og:image:alt" content={post.title} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        {post.seo.metaDesc && (
          <meta name="twitter:description" content={post.seo.metaDesc} />
        )}
        {post.featuredImage?.node?.sourceUrl && (
          <meta
            name="twitter:image"
            content={post.featuredImage.node.sourceUrl}
          />
        )}
        <meta name="twitter:image:alt" content={post.title} />
        <meta
          name="twitter:url"
          content={`https://unlockyoursound.com/${post.slug}`}
        />
      </Head>

      <div className={styles.main}>
        <Container maxW="xl">
          <Nav />
          <Box css={{ all: "unset" }}>
            {post.featuredImage && (
              <Image
                src={post.featuredImage.node.sourceUrl}
                alt={post.title}
                width={2000}
                height={2000}
              />
            )}
            <Heading as="h1" color={headingColor}>
              {post.title}
            </Heading>
            <Text
              color={textColor}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <br></br>
            <ShareButton postSlug={post.slug} />
            <iframe
              src="https://unlockyoursound.substack.com/embed"
              width="100%"
              height="320"
              style={{
                border: "1px solid #EEE",
                background: "#f1f1f1",
                color: "white",
              }}
              frameborder="0"
              scrolling="no"
            ></iframe>
            <br></br>
          </Box>
          <Footer />
        </Container>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const response = await axios.post("https://unlockyoursound.io/graphql", {
    query: GET_POST_BY_SLUG,
    variables: { slug },
  });

  async function delayRender() {
    await setTimeout(5000);
    console.log("The page will be rendered in 5 seconds");
  }

  await delayRender();

  const post = await response.data.data.postBy;

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const response = await axios.post("https://unlockyoursound.io/graphql", {
    query: `
      query GetAllPosts {
        posts(first: 200) {
          nodes {
            slug
          }
        }
      }
    `,
  });

  // setTimeout(() => {
  //   console.log("Paths delayed for 200 seconds.");
  // }, "200000");

  async function delayPath() {
    await setTimeout(5000);
    console.log("The path will be rendered in 5 seconds");
  }

  await delayPath();

  const posts = await response.data.data.posts.nodes;

  const paths = await posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
