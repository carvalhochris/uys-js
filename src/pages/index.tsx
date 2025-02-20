import Nav from "@/components/Nav";
import {
  Button,
  Center,
  Divider,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

interface PostProp {
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

interface HomeProps {
  posts: PostProp[];
}

export default function Home({ posts }: HomeProps) {
  const { colorMode } = useColorMode();
  const textColor = colorMode === "dark" ? "gray.300" : "gray.800";

  return (
    <>
      <Head>
        <title>Unlock Your Sound</title>
        <meta name="description" content="The Artist Development Platform" />
        <meta itemProp="name" content="Unlock Your Sound" />
        <meta
          itemProp="description"
          content="The Artist Development Platform"
        />
        <meta
          itemProp="image"
          content="http://unlockyoursound.io/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />
        <link rel="canonical" href={`https://unlockyoursound.com/`} />
        <meta property="og:url" content="https://unlockyoursound.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Unlock Your Sound" />
        <meta
          property="og:description"
          content="The Artist Development Platform"
        />
        <meta
          property="og:image"
          content="http://unlockyoursound.io/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Unlock Your Sound" />
        <meta
          name="twitter:description"
          content="The Artist Development Platform"
        />
        <meta
          name="twitter:image"
          content="http://unlockyoursound.io/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />
      </Head>
      <Nav />
      <Center mt={100}>
        <Heading
          size="2xl"
          as="h1"
          lineHeight={1.4}
          textAlign="center"
          letterSpacing={3}
          maxW={500}
        >
          UNLOCK YOUR SOUND IS AN ARTIST DEVELOPMENT PLATFORM
        </Heading>
      </Center>
      <Center mt={0}>

      <Divider mt={10} width={300} />
      </Center>

      <Center mt={10}>
        <Link href="/on-boarding-1">
          <Button
            mt={4}
            mb={10}
            size="lg"
            borderColor="grey"
            variant="outline"
          >
            Learn more
          </Button>
        </Link>
      </Center>
    </>
  );
}
