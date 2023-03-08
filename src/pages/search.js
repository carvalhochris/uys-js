import { useState, useEffect } from "react";
import axios from "axios";
import styles from "@/styles/Home.module.css";
import { Container, Divider } from "@chakra-ui/react";
import Link from "next/link";
import Nav from "@/components/Nav";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        "https://unlockyoursound.com/graphql",
        {
          query: `
            query SearchPosts($search: String!) {
              posts(where: { search: $search }) {
                nodes {
                  id
                  title
                  slug
                }
              }
            }
          `,
          variables: { search: searchTerm },
        }
      );
      setSearchResults(response.data.data.posts.nodes);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(false);
  }, [searchResults]);

  return (
    <div className={styles.main}>
      <Container maxW="xl">
        <Nav />
        {/* <h1>Search Page</h1> */}
        <form onSubmit={handleSearch}>
          {/* <label>
            Input */}
            <Input
              type="text"
              name="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="find yourself"
            />
          {/* </label> */}
          <br></br>
          <Button type="submit" mt={5}>Search</Button>
          <Divider />
        </form>
        {loading ? (
          <Spinner size="xl" mt={10} />
        ) : searchResults.length > 0 ? (
          searchResults.map((result) => (
            <div key={result.id}>
              <Link href={`/${result.slug}`}>
                <h2 style={{ cursor: "pointer" }}>{result.title}</h2>
              </Link>
            </div>
          ))
        ) : (
          <p>...</p>
        )}
      </Container>
    </div>
  );
}
