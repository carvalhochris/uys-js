import Link from "next/link";
import { useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Container } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <Link href="/" legacyBehavior>
          <a style={{ marginRight: "10px" }}>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a style={{ marginRight: "10px" }}>About</a>
        </Link>
        <Link href="/posts" legacyBehavior>
          <a style={{ marginRight: "10px" }}>Posts</a>
        </Link>
        <Link href="/posts/featured-posts" legacyBehavior>
          <a style={{ marginRight: "10px" }}>Featured</a>
        </Link>
        <Button onClick={toggleColorMode} size={10} mr={10} mb={0}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </nav>
      <Divider mt={5} mb={5} />
    </>
  );
}
