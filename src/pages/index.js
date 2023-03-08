import Link from "next/link";
import { Container, Heading, Text, Center } from "@chakra-ui/react";
import axios from "axios";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/Nav";
import { Divider } from "@chakra-ui/react";
// import { useColorMode } from "@chakra-ui/react";
// import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import Footer from "@/components/Footer";
// import FeaturedPosts from "./posts/featured-posts";
// import { Button } from "@chakra-ui/react";
import Image from 'next/image';

export default function Home({ posts }) {
  // const { colorMode, toggleColorMode } = useColorMode();

//   const GET_FEATURED_POSTS = `
//   query GetFeaturedPosts {
//     posts(first: 100, where: { categoryId: 322 }) {
//       nodes {
//         id
//         slug
//         title
//       }
//     }
//   }
// `;

  return (
    <div className={styles.main}>
      <Container maxW="xl">
        <Nav />
        <Heading as="h1">
          Unlock Your Sound is an artist self-development platform
        </Heading>
        <Divider mt={5} mb={5} />
        <Text>
          Unlock a bundle of free resources to help you create and release your
          music
        </Text>
        <Center>
          <iframe
            src="https://unlockyoursound.substack.com/embed"
            width="100%"
            height="320"
            style={{
              border: "1px solid #EEE",
            }}
            frameborder="0"
            scrolling="no"
          ></iframe>
        </Center>
        <Divider mt={5} mb={5} />
        {/* <div>
          {posts.map((post) => (
            <div key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <Text as="u">{post.title.rendered}</Text>
              </Link>
              <Divider mt={5} mb={5} />
            </div>
          ))}
        </div> */}
        {/* <FeaturedPosts /> */}
        {/* <Footer /> */}
      </Container>
      <div className={styles.main}>
        <Container maxW="xl">
          {/* <Nav /> */}
          <Heading>Featured Content</Heading>
          <Divider mt={5} mb={5} />
          <ul>
            {posts.map((post) => (
              <div key={post.slug} >
                <Link href={`/posts/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <Heading as="h3" mb={5}>{post.title}</Heading>
                  <Image
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.title}
                    width={500}
                    height={500}
                  />
                  <Divider mt={5} mb={5} />
                </Link>
              </div>
            ))}
          </ul>

          <Footer />
        </Container>
      </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const response = await axios.get(
//     "https://unlockyoursound.com/wp-json/wp/v2/posts"
//   );
//   const posts = response.data;

//   return {
//     props: {
//       posts,
//     },
//   };
// }

const GET_FEATURED_POSTS = `
  query GetFeaturedPosts {
    posts(first: 100, where: { categoryId: 322 }) {
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

// function FeaturedPosts({ posts }) {
//   return (
//     <div className={styles.main}>
//       <Container maxW="xl">
//         <Nav />
//         <Heading>Featured Posts</Heading>
//         <Divider mt={5} mb={5} />
//         <ul>
//           {posts.map((post) => (
//             <div key={post.slug}>
//               <Link href={`/posts/${post.slug}`}>
//                 <Text as="u">{post.title}</Text>
//                 <Divider mt={5} mb={5} />
//               </Link>
//             </div>
//           ))}
//         </ul>
//         <Footer />
//       </Container>
//     </div>
//   );
// }

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
