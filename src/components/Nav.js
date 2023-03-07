import Link from "next/link";
import { useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Container } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

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
        {/* <Link href="/" legacyBehavior>
          <a style={{ marginRight: "10px", fontSize: textSize }}>Home</a>
        </Link> */}
        <Link href="/about" legacyBehavior>
          <a style={{ marginRight: "20px", fontSize: textSize, textDecoration: "none" }}>About</a>
        </Link>
        <Link href="/posts" legacyBehavior>
          <a style={{ marginRight: "20px", fontSize: textSize, textDecoration: "none" }}>Posts</a>
        </Link>
        <Link href="/posts/featured-posts" legacyBehavior>
          <a style={{ marginRight: "20px", fontSize: textSize, textDecoration: "none" }}>Featured</a>
        </Link>
        <Button onClick={toggleColorMode} size={10} mb={0} ml={5} mr={2}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </nav>
      <Divider mt={5} mb={5} />
    </>
  );
}
