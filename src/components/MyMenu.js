import React from "react";
import { useColorMode, Box, Image, Divider, Button } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Link } from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import { ExternalLinkIcon, EmailIcon } from "@chakra-ui/icons";

export default function MyMenu() {
  const { colorMode, toggleColorMode } = useColorMode();
  const textSize = 17;

  return (
    <>
      <EmailIcon />
      <AiFillGithub />
      <Divider orientation="vertical" colorScheme="purple" variant="solid" />
      <Button onClick={toggleColorMode} size={10} mr={10} mb={0}>
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </>
  );
}
