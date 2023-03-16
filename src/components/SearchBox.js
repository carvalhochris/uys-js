import { useState, useEffect } from "react";
import axios from "axios";
import styles from "@/styles/Home.module.css";
import { Center, Container, Divider, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";
import Nav from "@/components/Nav";
import { Input } from "@chakra-ui/react";
import { Button, Select, Text } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import { ExternalLinkIcon, EmailIcon } from "@chakra-ui/icons";
// import Image from "next/image";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { colorMode } = useColorMode();

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("https://unlockyoursound.com/graphql", {
        query: `
            query SearchPosts($search: String!) {
              posts(first: 1000, where: { search: $search }) {
                nodes {
                  id
                  title
                  slug
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
          `,
        variables: { search: searchTerm },
      });
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
    <div>
      {/* <Container maxW="xl" maxH={20}> */}
      {/* <Nav /> */}
      {/* <h1>Search Page</h1> */}
      <form onSubmit={handleSearch}>
        {/* <label>
            Input */}
        <Heading size="lg" as="h1">
          The Vault
        </Heading>
        {/* <br></br> */}
        {colorMode === "light" ? (
          <Input
            type="text"
            name="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            // size={100}
            size="lg"
            borderColor="#202020"
            // mt={10}
          />
        ) : (
          <Input
            type="text"
            name="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            _placeholder={{ color: "grey" }}
            placeholder="Search..."
            // size={100}
            size="lg"
            borderColor="#white"
          />
        )}
        <Select
          placeholder="Select a keyword or enter your own..."
          size="lg"
          mt={3}
          onChange={(e) => setSearchTerm(e.target.value)}
        >
          <option value="royalties">royalties</option>
          {/* <option value="music production">music production</option> */}
          <option value="publishing">publishing</option>
          <option value="distribution">distribution</option>
          <option value="marketing">marketing</option>
          {/* add more options here */}
          {/* <option value={searchTerm}>Enter your own keyword...</option> */}
        </Select>

        {/* </label> */}
        {/* <br></br> */}
        {/* <br></br> */}
        <Button
          type="submit"
          mt={10}
          size="lg"
          borderColor="grey"
          variant="outline"
          // backgroundColor="#7756E3"
          color="#white"
        >
          Search
        </Button>
        <br></br>
        <br></br>

        {/* <Divider /> */}
      </form>
      {loading ? (
        <Center>
          <Spinner size="xl" mt={10} color="#7756E3" />
        </Center>
      ) : searchResults.length > 0 ? (
        searchResults.map((result) => (
          <div key={result.id}>
            <Link href={`/${result.slug}`} style={{ textDecoration: "none" }}>
              <Image
                src={result.featuredImage.node.sourceUrl}
                alt={result.title}
                width={1000}
                height={1000}
              />
            </Link>
            <Link href={`/${result.slug}`} style={{ textDecoration: "none" }}>
            <Heading as="h3" style={{ cursor: "pointer" }}>
              {result.title}
            </Heading>
            </Link>
            <Text fontSize="lg">{result.seo.metaDesc}</Text>
            <Link href={`/${result.slug}`} style={{ textDecoration: "none" }}>
              <Text fontSize="lg" as="u">
                Read on
              </Text>
            </Link>
            <Divider mt={10} mb={5} />
            {/* <Divider /> */}
          </div>
        ))
      ) : (
        <p>{/* ... */}</p>
      )}
      {/* </Container> */}

      {/* <Text fontSize="md">
        The source code for the frontend of this website is available{" "}
        <ChakraLink isExternal href="https://github.com/carvalhochris/uys-js">
          on GitHub.
          <ExternalLinkIcon mx="2px" />
        </ChakraLink>
      </Text> */}
    </div>
  );
}
