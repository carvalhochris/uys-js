import {
  Button,
  Center,
  Divider,
  Heading,
  Select,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";

interface ResultProps {
  id: number;
  title: string;
  slug: string;
  seo: {
    metaDesc: string;
  };
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
}

export default function TopicBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([
    { value: "royalties", label: "Royalties" },
    { value: "publishing", label: "Publishing" },
    { value: "distribution", label: "Distribution" },
    { value: "marketing", label: "Marketing" },
    { value: "audio", label: "Audio" },
    { value: "songcards", label: "Songcards" },
    { value: "logic pro x", label: "Logic Pro X" },
    { value: "bandcamp", label: "Bandcamp" },

  ]);

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
        <Heading as="h2" size="xl" mt={10} mb={5}>
          The Vault
        </Heading>
        <Text mb={5}>Dive in to our ever-growing archives</Text>
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
        <Button
          type="submit"
          mt={10}
          size="lg"
          borderColor="grey"
          variant="outline"
          color="#white"
        >
          Browse
        </Button>

        <br></br>
        <br></br>
      </form>
      {loading ? (
        <Center>
          <Spinner size="xl" mt={10} color="#7756E3" />
        </Center>
      ) : searchResults.length > 0 ? (
        searchResults.map((result: ResultProps) => (
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
