import styles from "@/styles/Home.module.css";
import { Box, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import ShareButton from "../components/WhatsAppButton";

interface ParamProps {
  params: {
    slug: string;
  };
}

interface PostProps {
  slug: string;
  thebody: string;
  result: string;
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

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
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
      <div>
        <Box>
          {post.featuredImage && (
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.title ?? ""}
              width={2000}
              height={2000}
            />
          )}
          <Heading as="h1" size="2xl" lineHeight={1.3} mt={10} mb={10}>
            {post.title ?? ""}
          </Heading>
          <div
            className={styles.main}
            dangerouslySetInnerHTML={{ __html: `${post.content}` }}
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
          ></iframe>
          <br></br>
        </Box>
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
    },
  });

  const jay = await response.json();

  const post = await jay.data.postBy;

  return {
    props: {
      post,
    },
    revalidate: 604800,
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
    },
  });

  const jay = await response.json();

  const posts = await jay.data.posts.nodes;

  const paths = await posts.map((post: PostProps) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: "blocking" };
}
