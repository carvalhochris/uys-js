// import Link from "next/link";
import { useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Container } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Text, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

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

        <Button onClick={toggleColorMode} size={10} mr={10} mb={0}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </footer>
      <Divider mt={5} mb={5} />
      <Text fontSize="md">
        The source code for the frontend of this website is available{" "}
        <Link isExternal href="https://github.com/carvalhochris/uys-js">
          on GitHub.
          <ExternalLinkIcon mx="2px" />
        </Link>
      </Text>
      <Text fontSize="md">© 2023 Unlock Your Sound Ltd</Text>
      <Divider mt={5} mb={5} />
      {/* <Text fontSize='md'>UNLOCK YOUR SOUND LTD is a limited company registered in the UK

Company #11443507</Text> */}
    </>
  );
}
