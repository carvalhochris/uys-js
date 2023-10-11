import axios from "axios";
import {
  Container,
  Divider,
  Heading,
  Link as ChakraLink,
} from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Head from "next/head";
import { EmailIcon } from "@chakra-ui/icons";
import { Icon, HStack } from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function About({ pageContent }) {
  return (
    <>
      <Head>
        <title>Christopher Carvalho — Founder of Unlock Your Sound</title>
        <meta
          name="description"
          content="Hi, I’m Christopher. I run Unlock Your Sound — an online resource for artists, producers, and industry professionals"
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemprop="name" content="Christopher Carvalho" />
        <meta
          itemprop="description"
          content="Hi, I’m Christopher. I run Unlock Your Sound — an online resource for artists, producers, and industry professionals"
        />
        <meta
          itemprop="image"
          content="https://unlockyoursound.io/wp-content/uploads/2022/05/DSC00198-edit-2048x1365.jpeg"
        />
        <link
          rel="canonical"
          href={`https://unlockyoursound.com/christopher-carvalho`}
        />
        {/* <!-- Facebook Meta Tags --> */}
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

        {/* <!-- Twitter Meta Tags --> */}
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

      <div className={styles.main}>
        <Container maxW="xl">
          <Nav />
          <Heading ml={0} size="lg" as="h1">
            Christopher Carvalho — Founder of Unlock Your Sound
          </Heading>
          <div
            style={{ paddingTop: "10px", paddingBottom: "10px" }}
            dangerouslySetInnerHTML={{ __html: pageContent }}
          ></div>

          <HStack spacing={7} mt={5}>
            {/* The default icon size is 1em (16px) */}
            {/* <Icon as={MdSettings} /> */}

            <ChakraLink href="mailto:enquires@unlockyoursound.com" isExternal>
              <EmailIcon boxSize={30} />
            </ChakraLink>
            <ChakraLink href="https://github.com/carvalhochris" isExternal>
              <AiFillGithub size={30} />
            </ChakraLink>
            <ChakraLink href="https://github.com/carvalhochris" isExternal>
              <AiFillLinkedin size={30} />
            </ChakraLink>
            {/* Use the `boxSize` prop to change the icon size */}
            {/* <Icon as={MdReceipt} boxSize={6} /> */}

            {/* Use the `color` prop to change the icon color */}
            {/* <Icon as={MdGroupWork} w={8} h={8} color="red.500" /> */}
          </HStack>
          
          <Divider />
          <Footer />
        </Container>
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
