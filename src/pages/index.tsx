import { Button, Divider, Heading, Text, useColorMode } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TopicBox from "../components/TopicBox";

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

  return (
    <>
      <Head>
        <title>Unlock Your Sound</title>
        <meta
          name="description"
          content="The artist self-development platform"
        />

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
      </Head>
      <div>
        <Heading size="3xl" as="h1" lineHeight={1.4} mt={10}>
          Unlock Your Sound is an artist self-development platform
        </Heading>
        <Divider mt={5} mb={5} />
        <Text mt={10} mb={5} fontSize="xl">
          Access a bundle of free resources to help you create and release your
          music
        </Text>

        <Link href="/free">
          <Button
            mt={6}
            mb={0}
            size="lg"
            borderColor="grey"
            variant="outline"
            backgroundColor="#7756E3"
            color="white"
          >
            Unlock Resources
          </Button>
        </Link>
        <Divider mt={10} mb={10} />
        <div>
          <TopicBox />
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
                <Link href={`/${post.slug}`} style={{ textDecoration: "none" }}>
                  {post.featuredImage && (
                    <Image
                      src={post.featuredImage.node.sourceUrl}
                      alt={post.title}
                      width={1000}
                      height={1000}
                    />
                  )}
                  <Heading as="h3" mb={5} mt={5}>
                    {post.title}
                  </Heading>
                </Link>
                <Text fontSize="lg" color={textColor}>
                  {post.seo.metaDesc}
                </Text>
                <Link href={`/${post.slug}`} style={{ textDecoration: "none" }}>
                  <Text fontSize="lg">
                    <Button
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
  const wpURL = process.env.WORDPRESS_ENDPOINT;

  if (wpURL) {
    const response = await fetch(wpURL, {
      body: JSON.stringify({
        query: GET_FEATURED_POSTS,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
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
}
