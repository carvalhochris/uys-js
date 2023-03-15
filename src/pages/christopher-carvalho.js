import axios from "axios";
import { Container, Heading } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Head from "next/head";

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
        <meta itemprop="name" content="Unlock Your Sound" />
        <meta
          itemprop="description"
          content="Hi, I’m Christopher. I run Unlock Your Sound — an online resource for artists, producers, and industry professionals"
        />
        <meta
          itemprop="image"
          content="https://unlockyoursound.com/wp-content/uploads/2022/05/DSC00198-edit-2048x1365.jpeg"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://uys-js.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Unlock Your Sound" />
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
        <meta name="twitter:title" content="Unlock Your Sound" />
        <meta
          name="twitter:description"
          content="Hi, I’m Christopher. I run Unlock Your Sound — an online resource for artists, producers, and industry professionals"
        />
        <meta
          name="twitter:image"
          content="https://unlockyoursound.com/wp-content/uploads/2022/05/DSC00198-edit-2048x1365.jpeg"
        />
      </Head>
   
    <div className={styles.main}>
      <Container maxW="xl">
        <Nav />
        <Heading ml={0}>Christopher Carvalho</Heading>
        <div
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
          dangerouslySetInnerHTML={{ __html: pageContent }}
        ></div>
        <Footer />
      </Container>
    </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    "https://unlockyoursound.com/wp-json/wp/v2/pages/14091"
  );
  const pageContent = response.data.content.rendered;
  return {
    props: {
      pageContent,
    },
  };
}
