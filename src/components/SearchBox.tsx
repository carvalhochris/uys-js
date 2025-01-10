import {
  Button,
  Center,
  Divider,
  Heading,
  Input,
  Spinner,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface SearchProps {
  id: number;
  slug: string;
  title: string;
  seo: {
    metaDesc: string;
  };
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
}

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const { colorMode } = useColorMode();

  const handleSearch = async (event: { preventDefault: () => void }) => {
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
      <form onSubmit={handleSearch}>
        <Heading size="2xl" as="h1" mt={10} mb={5}>
          Search
        </Heading>
        <Text mb={5}>Find what you are looking for</Text>
        {colorMode === "light" ? (
          <Input
            type="text"
            name="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            _placeholder={{ color: "grey" }}
            placeholder="Search..."
            size="lg"
            borderColor="#white"
          />
        ) : (
          <Input
            type="text"
            name="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            _placeholder={{ color: "grey" }}
            placeholder="Search..."
            size="lg"
            borderColor="#white"
          />
        )}
        <Button
          type="submit"
          mt={10}
          size="lg"
          borderColor="grey"
          variant="outline"
          color="#white"
        >
          Search
        </Button>
        <br></br>
        <br></br>
      </form>
      {loading ? (
        <Center>
          <Spinner size="xl" mt={10} color="#7756E3" />
        </Center>
      ) : searchResults.length > 0 ? (
        searchResults.map((result: SearchProps) => (
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
          </div>
        ))
      ) : (
        <p>{/* ... */}</p>
      )}
    </div>
  );
}
