import { useState } from "react";
import axios from "axios";
import styles from "@/styles/Home.module.css";
import { Container } from "@chakra-ui/react";
import Link from "next/link";
import Nav from "@/components/Nav";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
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
    }
  };

  return (
    <div className={styles.main}>
      <Container maxW="xl">
        <Nav />
        <h1>Search Page</h1>
        <form onSubmit={handleSearch}>
          <label>
            Input
            <input
              type="text"
              name="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>
          <button type="submit">Search</button>
        </form>
        {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <div key={result.id}>
              <Link href={`/${result.slug}`}>
                <h2 style={{ cursor: "pointer" }}>{result.title}</h2>
              </Link>
            </div>
          ))
        ) : (
          <p>No search results.</p>
        )}
      </Container>
    </div>
  );
}
