import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Divider, useColorMode } from "@chakra-ui/react";
// import { Link } from "next/link";

export default function MyMenu() {
  const { colorMode, toggleColorMode } = useColorMode();
  const textSize = 17;

  return (
    <>
      {/* <EmailIcon />
      <AiFillGithub /> */}
      <Divider orientation="vertical" colorScheme="purple" variant="solid" />
      <Box onClick={toggleColorMode} mr={10} mb={0} cursor="pointer">
        {colorMode === "light" ? (
          <MoonIcon fontSize={20} />
        ) : (
          <SunIcon fontSize={20} />
        )}
      </Box>
    </>
  );
}
