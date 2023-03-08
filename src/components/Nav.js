import Link from "next/link";
import { useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
// import { Container } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { ExternalLinkIcon, EmailIcon } from "@chakra-ui/icons";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsMastodon } from "react-icons/bs";
import { AiFillInfoCircle } from "react-icons/ai";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const textSize = 17;

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // textDecoration: "none",
        }}
      >
        <Link href="/" legacyBehavior style={{ position: "relative" }}>
        <Box boxSize="80px" mr={5} display="flex" alignItems="center" cursor="pointer">
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
        <EmailIcon />
        <AiFillYoutube />
        <AiFillGithub />
        <BsMastodon />
        <Button onClick={toggleColorMode} size={10} mb={0} ml={5} mr={2}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </nav>
      <Divider mt={5} mb={5} />
    </>
  );
}
