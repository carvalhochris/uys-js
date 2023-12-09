// import axios from "axios";
import { Container, Heading } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
// import Nav from "@/components/Nav";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Stack, StackDivider, Box, Text } from "@chakra-ui/react";
// import Footer from "@/components/Footer";
import Image from "next/image";
// import ShareButton from "@/components/WhatsAppButton";
import ShareButton from "../components/WhatsAppButton";
import Head from "next/head";
import { useColorMode } from "@chakra-ui/react";
import { setTimeout } from "timers/promises";
import React, { ReactNode } from "react";
// import sanitizeHtml from "sanitize-html";
// import { ustyle } from "@/ustyle";

// interface ResponseProps {
//   response: Response
// }

interface ParamProps {
  params: {
    slug: string;
  };
}

interface PostProps {
  slug: string;
  thebody: string;
  thestring: string;
  jbody: string;
  clean: string;
  post: {
    title: string;
    seo: {
      metaDesc: string;
    };
    slug: string;
    content: string;
    featuredImage: {
      node: {
        sourceUrl: string;
      };
    };
  };
}

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

export default function Post({
  post,
  thebody,
}: // jbody,
// clean,
// thestring,
PostProps) {
  const { colorMode } = useColorMode();
  const textColor = colorMode === "dark" ? "gray.100" : "gray.900";
  const headingColor = colorMode === "dark" ? "white" : "gray.900";
  // const body = sanitizeHTML(post.content)

  // console.log(post.content);

  return (
    <>
      <Head>
        {/* Facebook Meta Tags */}
        <title>{post.title}</title>
        <meta name="description" content={post.seo?.metaDesc ?? ""} />
        <meta itemProp="name" content={post.title ?? ""} />
        <meta itemProp="description" content={post.seo?.metaDesc ?? ""} />
        {post.featuredImage?.node?.sourceUrl && (
          <meta itemProp="image" content={post.featuredImage.node.sourceUrl} />
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
        <meta property="og:title" content={post.title ?? ""} />
        {post.seo.metaDesc && (
          <meta property="og:description" content={post.seo.metaDesc} />
        )}
        {post.featuredImage?.node?.sourceUrl && (
          <meta
            property="og:image"
            content={post.featuredImage.node.sourceUrl}
          />
        )}
        {post.title && <meta property="og:image:alt" content={post.title} />}

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />

        {post.title && <meta name="twitter:title" content={post.title} />}
        {post.seo.metaDesc && (
          <meta name="twitter:description" content={post.seo.metaDesc} />
        )}
        {post.featuredImage?.node?.sourceUrl && (
          <meta
            name="twitter:image"
            content={post.featuredImage.node.sourceUrl}
          />
        )}
        {post.title && <meta name="twitter:image:alt" content={post.title} />}
        <meta
          name="twitter:url"
          content={`https://unlockyoursound.com/${post.slug}`}
        />
      </Head>

      <div
      // className={styles.main}
      >
        <Container maxW="xl">
          <Nav />
          <Box>
            {post.featuredImage && (
              <Image
                src={post.featuredImage.node.sourceUrl}
                alt={post.title ?? ""}
                width={2000}
                height={2000}
              />
            )}
            <Heading as="h1" size="3xl" lineHeight={1.3} mt={10} mb={10}>
              {post.title ?? ""}
            </Heading>

            {/* <div dangerouslySetInnerHTML={body} /> */}
            <Text
              className={styles.main}
              dangerouslySetInnerHTML={{ __html: `${thebody}` }}
            />

            <br></br>
            <ShareButton postSlug={post.slug} />
            <br />
            <br />
            <iframe
              src="https://unlockyoursound.substack.com/embed"
              width="100%"
              height="320"
              style={{
                border: "1px solid #EEE",
                background: "#f1f1f1",
                color: "white",
              }}
              // frameBorder="0"
              // scrolling="no"
            ></iframe>
            <br></br>
          </Box>
          <Footer />
        </Container>
      </div>
    </>
  );
}

export async function getStaticProps({ params }: ParamProps) {
  const { slug } = params;

  const response = await fetch("https://unlockyoursound.io/graphql", {
    body: JSON.stringify({
      query: GET_POST_BY_SLUG,
      variables: { slug },
    }),
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    // body: JSON.stringify({ query: `${GET_POST_BY_SLUG}`, variables: { slug } }),
    // variables: { slug },
  });

  async function delayRender() {
    await setTimeout(1000);
    console.log("The page will be rendered in 1 seconds");
  }

  // await delayRender();

  // console.log(response)

  const jay = await response.json();

  // console.log(jay)

  // console.log(jay)

  const post = await jay.data.postBy;

  const thebody = await post.content;

  // console.log(post);

  // const thebody = await post.content;
  // console.log(post)

  // const clean = sanitizeHtml(thebody);

  // const thestring = JSON.stringify(thebody)

  // console.log(thebody)

  // console.log(clean)

  // const jbody = JSON.stringify(thebody);

  // console.log(jbody);

  // console.log(post)

  // if (!post) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      post,
      thebody,
      // clean,
      // thestring,
      // jbody,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://unlockyoursound.io/graphql", {
    body: JSON.stringify({
      query: `query GetAllPosts {
        posts(first: 1000) {
          nodes {
            slug
          }
        }
      }`,
    }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  // setTimeout(() => {
  //   console.log("Paths delayed for 200 seconds.");
  // }, "200000");

  async function delayPath() {
    await setTimeout(1000);
    console.log("The path will be rendered in 1 second");
  }

  // await delayPath();

  // const jsonif = async () => {
  //   try {
  //     const jaay = await response.json();
  //     return jaay;
  //   } catch (err) {
  //     console.log("chris' json error: ", err);
  //   }
  //   // return jaay
  // };

  // const jaaay = await jsonif();

  const jay = await response.json();

  const posts = await jay.data.posts.nodes;

  const paths = await posts.map((post: PostProps) => ({
    params: { slug: post.slug },
  }));

  // console.log(paths);

  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}
