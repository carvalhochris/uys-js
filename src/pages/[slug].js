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
            <Heading size="md" as="h1">
              {post.title}
            </Heading>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
            <ShareButton postSlug={post.slug} />
          </Box>
          <Footer />
        </Container>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const response = await axios.post("https://unlockyoursound.com/graphql", {
    query: GET_POST_BY_SLUG,
    variables: { slug },
  });

  const post = response.data.data.postBy;

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
  const response = await axios.post("https://unlockyoursound.com/graphql", {
    query: `
      query GetAllPosts {
        posts(first: 1000) {
          nodes {
            slug
          }
        }
      }
    `,
  });
  const posts = response.data.data.posts.nodes;

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
