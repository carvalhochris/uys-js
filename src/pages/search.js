import { Container } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import Search from "@/components/SearchBox";
import Nav from "@/components/Nav";
import Head from "next/head";

export default function SearchPage() {
    return (
        <>
        <Head>
        <title>Music Production</title>
        <meta
          name="description"
          content="The Artist Self-Development Platform"
        />
        <meta name="keywords" content="Music production, business, marketing" />
        <meta property="og:title" content="Unlock Your Sound" />
        <meta
          property="og:description"
          content="The Artist Self-Development Platform"
        />
        <meta
          property="og:image"
          content="http://unlockyoursound.com/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />
        <meta property="og:url" content="http://unlockyoursound.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Unlock Your Sound" />
        <meta
          name="twitter:description"
          content="The Artist Self-Development Platform"
        />
        <meta
          name="twitter:image"
          content="http://unlockyoursound.com/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
        <div className={styles.main}>
            <Container maxW="xl">
            <Nav />
                {/* <h1>Hello search</h1> */}
                <Search />
            </Container>
        </div>
        </>
    );
}