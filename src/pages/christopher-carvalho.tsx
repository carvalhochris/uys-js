import styles from "@/styles/Home.module.css";
import { EmailIcon } from "@chakra-ui/icons";
import { Link as ChakraLink, Divider, HStack, Heading } from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

interface AboutPageProps {
  pageContent: {
    data: {
      content: {
        rendered: string;
      };
    };
  };
}

export default function About({ pageContent }: AboutPageProps) {
  return (
    <>
      <Head>
        <title>Christopher Carvalho — Founder of Unlock Your Sound</title>
        <meta
          name="description"
          content="Hi, I’m Christopher. I run Unlock Your Sound — an online resource for artists, producers, and industry professionals"
        />
        <meta itemProp="name" content="Christopher Carvalho" />
        <meta
          itemProp="description"
          content="Hi, I’m Christopher. I run Unlock Your Sound — an online resource for artists, producers, and industry professionals"
        />
        <meta
          itemProp="image"
          content="https://unlockyoursound.io/wp-content/uploads/2022/05/DSC00198-edit-2048x1365.jpeg"
        />
        <link
          rel="canonical"
          href={`https://unlockyoursound.com/christopher-carvalho`}
        />
        <meta
          property="og:url"
          content="https://unlockyoursound.com/christopher-carvalho"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Christopher Carvalho — Founder of Unlock Your Sound"
        />
        <meta
          property="og:description"
          content="Hi, I’m Christopher. I run Unlock Your Sound — an online resource for artists, producers, and industry professionals"
        />
        <meta
          property="og:image"
          content="https://unlockyoursound.com/wp-content/uploads/2022/05/DSC00198-edit-2048x1365.jpeg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Christopher Carvalho — Founder of Unlock Your Sound"
        />
        <meta
          name="twitter:description"
          content="Hi, I’m Christopher. I run Unlock Your Sound — an online resource for artists, producers, and industry professionals"
        />
        <meta
          name="twitter:image"
          content="https://unlockyoursound.io/wp-content/uploads/2022/05/DSC00198-edit-2048x1365.jpeg"
        />
      </Head>

      <div>
        <Heading ml={0} size="3xl" as="h1" lineHeight={1.4}>
          Christopher Carvalho — Founder of Unlock Your Sound
        </Heading>
        <div
          className={styles.main}
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
          dangerouslySetInnerHTML={{ __html: pageContent }}
        ></div>

        <HStack spacing={7} mt={5} mb={10}>
          <ChakraLink href="mailto:enquires@unlockyoursound.com" isExternal>
            <EmailIcon boxSize={30} />
          </ChakraLink>
          <ChakraLink href="https://github.com/carvalhochris" isExternal>
            <AiFillGithub size={30} />
          </ChakraLink>
          <ChakraLink href="https://github.com/carvalhochris" isExternal>
            <AiFillLinkedin size={30} />
          </ChakraLink>
        </HStack>
        <Divider />
        <iframe
          src="https://unlockyoursound.substack.com/embed"
          height={350}
          width="100%"
          style={{ border: "solid" }}
        ></iframe>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    "https://unlockyoursound.io/wp-json/wp/v2/pages/14091"
  );
  const pageContent = response.data.content.rendered;
  return {
    props: {
      pageContent,
    },
  };
}
