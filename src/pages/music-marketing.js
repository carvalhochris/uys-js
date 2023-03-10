import {
    Container,
    Heading,
    Text,
    Divider,
    // Image,
    Link,
  } from "@chakra-ui/react";
  import axios from "axios";
  import Nav from "@/components/Nav";
  import Footer from "@/components/Footer";
  import styles from "@/styles/Home.module.css";
  import Image from "next/image";
  
  export default function MusicMarketing({ posts }) {
    return (
      <div className={styles.main}>
        <Container maxW="xl">
          <Nav />
          <Heading size="md">Music Marketing</Heading>
          <ul>
            {posts.map((post) => (
              <div key={post.slug}>
                <Link href={`/${post.slug}`} style={{ textDecoration: "none" }}>
                  <Heading as="h3" mb={5}>
                    {post.title}
                  </Heading>
                  <Image
                    src={post.featuredImage.node.sourceUrl}
                    alt={post.title}
                    width={500}
                    height={500}
                  />
                  <Divider mt={10} mb={5} />
                </Link>
              </div>
            ))}
          </ul>
          <Footer />
        </Container>
      </div>
    );
  }
  
  const GET_MARKETING_POSTS = `
      query GetFeaturedPosts {
        posts(first: 1000, where: { categoryId: 277 }) {
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
      query: GET_MARKETING_POSTS,
    });
    const posts = response.data.data.posts.nodes;
  
    return {
      props: {
        posts,
      },
    };
  }
  