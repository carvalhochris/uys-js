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
      {/* <!-- HTML Meta Tags --> */}
      <title>Unlock Your Sound</title>
        <meta
          name="description"
          content={post.metaDesc}
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
        <Heading size="md">{post.title}</Heading>
        <Box css={{ all: "unset" }}>
          {post.featuredImage && (
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.title}
              width={500}
              height={500}
            />
          )}
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
