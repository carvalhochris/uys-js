import Link from "next/link";
import { Container, Heading, Text, Center } from "@chakra-ui/react";
import axios from "axios";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/Nav";
import { Divider } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

import { Button } from "@chakra-ui/react";



export default function Home({ posts }) {
  // const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className={styles.main}>
      <Container maxW="xl">
      {/* <Button onClick={toggleColorMode} mt={0} size={10} mb={7}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button> */}
        <Nav />
        <Heading as="h1">
          Unlock Your Sound is an artist self-development platform
        </Heading>
        <Divider mt={5} mb={5} />
        <Text>
          Unlock a bundle of free resources to help you create and release your
          music
        </Text>
        <Divider mt={5} mb={5} />
        <Center>
          <iframe
            src="https://unlockyoursound.substack.com/embed"
            width="100%"
            height="320"
            style={{
              border: "1px solid #EEE",
              // background: "#000000",
              // color: "white",
            }}
            frameborder="0"
            scrolling="no"
          ></iframe>
        </Center>
        <Divider mt={5} mb={5} />
        <div>
          {posts.map((post) => (
            <div key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <Text as="u">{post.title.rendered}</Text>
              </Link>
              <Divider mt={5} mb={5} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    "https://unlockyoursound.com/wp-json/wp/v2/posts"
  );
  const posts = response.data;

  return {
    props: {
      posts,
    },
  };
}
