// pages/posts/[slug].js
import axios from "axios";
import { Container, Heading } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Nav from "@/components/Nav";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Stack, StackDivider, Box, Text } from "@chakra-ui/react";

export default function Post({ post }) {
  return (
    <div className={styles.main}>
      <Container maxW="xl">
        <Nav />
        {/* <Heading>{post.title.rendered}</Heading>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div> */}
        <Card>
          <CardHeader>
            <Heading size="md">{post.title.rendered}</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                {/* <Heading size="xs" textTransform="uppercase">
                  Summary
                </Heading> */}
                <Text pt="2" fontSize="md">
                  <div
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                  ></div>
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
        {/* <Link href="/" as="/"><a>Home</a></Link>

        <Link href="/about" as="/about"><a>About</a></Link> */}
      </Container>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const response = await axios.get(
    `https://unlockyoursound.com/wp-json/wp/v2/posts?slug=${slug}`
  );
  const post = response.data[0];

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
  const response = await axios.get(
    "https://unlockyoursound.com/wp-json/wp/v2/posts"
  );
  const posts = response.data;

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
