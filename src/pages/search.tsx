import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Search from "@/components/SearchBox";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

export default function SearchPage() {
  return (
    <>
      <Head>
        <title>Search</title>
        <meta
          name="description"
          content="Dive in to our ever-growing archives"
        />
        <meta name="keywords" content="Music production, business, marketing" />
        <link rel="canonical" href={`https://unlockyoursound.com/search`} />
        <meta property="og:title" content="Search" />
        <meta
          property="og:description"
          content="Dive in to our ever-growing archives"
        />
        <meta
          property="og:image"
          content="http://unlockyoursound.io/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />
        <meta property="og:url" content="http://unlockyoursound.com/search" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Search" />
        <meta
          name="twitter:description"
          content="Dive in to our ever-growing archives"
        />
        <meta
          name="twitter:image"
          content="http://unlockyoursound.io/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div>
        <Nav />
        <Box mb={300}>
          <Search />
        </Box>
        <Footer />
      </div>
    </>
  );
}
