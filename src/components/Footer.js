import Link from "next/link";
import { HStack, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { ExternalLinkIcon, EmailIcon } from "@chakra-ui/icons";
import { AiFillGithub } from "react-icons/ai";
import { Link as ChakraLink } from "@chakra-ui/react";
import { AiFillInfoCircle } from "react-icons/ai";
import MyMenu from "./MyMenu";
import { FaDice } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  //   const textSize = 17;

  return (
    <>
      <footer
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <Link href="/" legacyBehavior style={{ position: "relative" }}>
          <Box
            boxSize="80px"
            mr={10}
            display="flex"
            alignItems="center"
            cursor="pointer"
            ml={0}
          >
            {colorMode === "light" ? (
              <Image
                src="https://unlockyoursound.com/wp-content/uploads/2019/05/Unlock-Your-Sound-01.png"
                alt="Unlock Your Sound light logo"
                // maxWidth={70}
              />
            ) : (
              <Image
                src="https://unlockyoursound.com/wp-content/uploads/2019/05/cropped-cropped-inverted-1-1.png"
                alt="Unlock Your Sound dark logo"
                // maxWidth={70}
              />
            )}
          </Box>
        </Link>
        {/* <Link href="/" legacyBehavior>
          <a style={{ marginRight: "10px", fontSize: textSize }}>Home</a>
        </Link> */}
        <AiFillHeart color="7756E3" />
        <Link href="/about" legacyBehavior style={{ position: "relative" }}>
          <Box
            // boxSize="80px"
            // mr={10}
            display="flex"
            alignItems="center"
            cursor="pointer"
            ml={0}
          >
            <AiFillInfoCircle />
          </Box>
        </Link>
        <Link href="/search" legacyBehavior style={{ position: "relative" }}>
          <Box
            // boxSize="80px"
            // mr={10}
            display="flex"
            alignItems="center"
            cursor="pointer"
            ml={0}
          >
            <AiOutlineSearch />
          </Box>
        </Link>
        <MyMenu />
      </footer>
      {/* <Divider mt={5} mb={5} /> */}
      {/* <HStack spacing={7} justify="flex-end">
        <Link href="/music-business" passHref>
          <ChakraLink textDecoration="none">Business</ChakraLink>
        </Link>
        <Divider mt={5} mb={5} orientation="vertical" />
        <Link href="/music-production" passHref>
          <ChakraLink textDecoration="none">Production</ChakraLink>
        </Link>
        <Divider mt={5} mb={5} orientation="vertical" />
        <Link href="/music-marketing" passHref>
          <ChakraLink textDecoration="none">Marketing</ChakraLink>
        </Link>
        <Divider mt={5} mb={5} orientation="vertical" />
      </HStack> */}
      <Divider mt={5} mb={5} />
      <Text fontSize="md">
        The source code for the frontend of this website is available{" "}
        <ChakraLink isExternal href="https://github.com/carvalhochris/uys-js">
          on GitHub.
          <ExternalLinkIcon mx="2px" />
        </ChakraLink>
      </Text>
      <Text fontSize="md" mb={10}>
        © 2023 Unlock Your Sound Ltd
      </Text>
      {/* <Divider mt={5} mb={5} /> */}
    </>
  );
}
