import { useState, useEffect } from "react";
import axios from "axios";
import styles from "@/styles/Home.module.css";
import { Container } from "@chakra-ui/react";
import Link from "next/link";
import Nav from "@/components/Nav";
import { Button } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { FaDice } from "react-icons/fa";

export default function RandomPage() {
  const [randomPost, setRandomPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [postContent, setPostContent] = useState("");

  const handleLoadRandomPost = async () => {
    setLoading(true);
    try {
      const response = await axios.post("https://unlockyoursound.com/graphql", {
        query: `
            query RandomPosts {
              posts(first: 1000) {
                nodes {
                  id
                  title
                  slug
                }
              }
            }
          `,
      });
      const randomIndex = Math.floor(Math.random() * 100);
      const randomPost = response.data.data.posts.nodes[randomIndex];
      setRandomPost(randomPost);

      // Fetch the content of the post
      const contentResponse = await axios.post(
        "https://unlockyoursound.com/graphql",
        {
          query: `
            query PostContent($slug: ID!) {
              post(id: $slug, idType: SLUG) {
                content
              }
            }
          `,
          variables: {
            slug: randomPost.slug,
          },
        }
      );
      setPostContent(contentResponse.data.data.post.content);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.main}>
      <Container maxW="xl">
        <Nav>
          <Link href="/">
            <Button variant="ghost" mr={4}>
              Search
            </Button>
          </Link>
        </Nav>
        <Heading>Roll the dice!</Heading>
        <Button onClick={handleLoadRandomPost} mt={5}>
          <FaDice />
        </Button>
        <br></br>
        {loading ? (
          <Spinner size="xl" mt={10} />
        ) : randomPost ? (
          <div>
            <Link href={`/${randomPost.slug}`}>
              <h2 style={{ cursor: "pointer" }}>{randomPost.title}</h2>
            </Link>
            {postContent && (
              <div
                className={styles.postContent}
                dangerouslySetInnerHTML={{ __html: postContent }}
              />
            )}
          </div>
        ) : null}
      </Container>
    </div>
  );
}
