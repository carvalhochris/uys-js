import React from "react";
import { useColorMode, Box, Image, Divider, Button } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
// import { Link } from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import { ExternalLinkIcon, EmailIcon } from "@chakra-ui/icons";
import { AiOutlineSearch } from "react-icons/ai";

export default function MyMenu() {
  const { colorMode, toggleColorMode } = useColorMode();
  const textSize = 17;

  return (
    <>
      {/* <EmailIcon />
      <AiFillGithub /> */}
      <Divider orientation="vertical" colorScheme="purple" variant="solid" />
      <Box onClick={toggleColorMode} mr={10} mb={0} cursor="pointer">
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Box>
    </>
  );
}
