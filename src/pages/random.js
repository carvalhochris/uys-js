import { useState, useEffect } from "react";
import axios from "axios";
import styles from "@/styles/Home.module.css";
import { Container } from "@chakra-ui/react";
import Link from "next/link";
import Nav from "@/components/Nav";
import { Button } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

export default function RandomPage() {
  const [randomPost, setRandomPost] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLoadRandomPost = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://unlockyoursound.com/graphql",
        {
          query: `
            query RandomPosts {
              posts(first: 100) {
                nodes {
                  id
                  title
                  slug
                }
              }
            }
          `
        }
      );
      const randomIndex = Math.floor(Math.random() * 100);
      setRandomPost(response.data.data.posts.nodes[randomIndex]);
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
        <h1>Random Page</h1>
        <Button onClick={handleLoadRandomPost} mt={5}>
          Load Random Post
        </Button>
        {loading ? (
          <Spinner size="xl" mt={10} />
        ) : randomPost ? (
          <div>
            <Link href={`/${randomPost.slug}`}>
              <h2 style={{ cursor: "pointer" }}>{randomPost.title}</h2>
            </Link>
          </div>
        ) : null}
      </Container>
    </div>
  );
}
