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

export default function TopicBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { colorMode } = useColorMode();
  const [options, setOptions] = useState([
    { value: "royalties", label: "Royalties" },
    { value: "publishing", label: "Publishing" },
    { value: "distribution", label: "Distribution" },
    { value: "marketing", label: "Marketing" },
    { value: "audio", label: "Audio" },
    { value: "bandcamp", label: "Bandcamp" },
    { value: "logic pro x", label: "Logic Pro X" },
  ]);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("https://unlockyoursound.io/graphql", {
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
        <Heading size="lg" as="h2">
          The Vault
        </Heading>
        <Text mb={5}>Dive in to our ever-growing archives</Text>
        {/* <br></br> */}

        <Select
          placeholder="Choose a topic"
          size="lg"
          mt={3}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        {/* 
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
        /> */}

        {/* <Select
          placeholder="Select a keyword or enter your own..."
          size="lg"
          mt={3}
          onChange={(e) => setSearchTerm(e.target.value)}
        >
          <option value="royalties">royalties</option>
         
          <option value="publishing">publishing</option>
          <option value="distribution">distribution</option>
          <option value="marketing">marketing</option>
         
        </Select> */}

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
          Browse
          {/* {searchTerm} */}
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
              {result.featuredImage &&
              result.featuredImage.node &&
              result.featuredImage.node.sourceUrl ? (
                <Image
                  src={result.featuredImage.node.sourceUrl}
                  alt={result.title}
                  width={1000}
                  height={1000}
                />
              ) : (
                <p>No image available</p>
              )}
            </Link>
            <Link href={`/${result.slug}`} style={{ textDecoration: "none" }}>
              <Heading as="h3" style={{ cursor: "pointer" }}>
                {result.title}
              </Heading>
            </Link>
            <Text fontSize="lg">{result.seo.metaDesc}</Text>
            <Link href={`/${result.slug}`} style={{ textDecoration: "none" }}>
              <Button
                // type="submit"
                mt={6}
                mb={5}
                size="md"
                borderColor="grey"
                variant="outline"
                backgroundColor="#000000"
                color="white"
              >
                Read on
              </Button>
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
