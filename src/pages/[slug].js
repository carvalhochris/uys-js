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

const GET_POST_BY_SLUG = `
  query GetPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      slug
      content
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

  console.log("Post slug: ", post.slug); // Add this console log


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
