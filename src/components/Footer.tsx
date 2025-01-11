import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Divider, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillHeart, AiFillInfoCircle, AiOutlineSearch } from "react-icons/ai";
import MyMenu from "./MyMenu";

export default function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();
  //   const textSize = 17;

  const router = useRouter();
  const activeColor = "#7756E3";

  const isCurrentPage = (pathname: string) => {
    return router.pathname === pathname;
  };

  return (
    <>
      {/* <Container maxW="xl"> */}
      <footer
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <Link
          href="/"
          // legacyBehavior style={{ position: "relative" }}
        >
          {/* <a className="no-js"> */}
          <Box
            boxSize="80px"
            mr={5}
            display="flex"
            alignItems="center"
            cursor="pointer"
          >
            {colorMode === "light" ? (
              <Image
                src="https://unlockyoursound.io/wp-content/uploads/2019/05/Unlock-Your-Sound-01.png"
                alt="Unlock Your Sound light logo"
                width={70}
                height={70}
                // maxWidth={70}
              />
            ) : (
              <Image
                src="https://unlockyoursound.io/wp-content/uploads/2019/05/cropped-cropped-inverted-1-1.png"
                alt="Unlock Your Sound dark logo"
                width={70}
                height={70}
                // maxWidth={70}
              />
            )}
          </Box>
          {/* </a> */}
        </Link>
        <Link
          href="/free"
          // legacyBehavior style={{ position: "relative" }}
        >
          {/* <a className="no-js"> */}
          <Box
            // boxSize="80px"
            // mr={10}
            display="flex"
            alignItems="center"
            cursor="pointer"
            ml={0}
          >
            <AiFillHeart
              color={isCurrentPage("/free") ? activeColor : ""}
              size={20}
            />
          </Box>
          {/* </a> */}
        </Link>

        <Link
          href="/christopher-carvalho"
          // legacyBehavior
          // style={{ position: "relative" }}
        >
          {/* <a className="no-js"> */}
          <Box
            // boxSize="80px"
            // mr={10}
            display="flex"
            alignItems="center"
            cursor="pointer"
            ml={0}
          >
            <AiFillInfoCircle
              color={isCurrentPage("/christopher-carvalho") ? activeColor : ""}
              size={20}
            />
          </Box>
          {/* </a> */}
        </Link>
        <Link
          href="/search"
          // legacyBehavior style={{ position: "relative" }}
        >
          {/* <a className="no-js"> */}
          <Box
            // boxSize="80px"
            // mr={10}
            display="flex"
            alignItems="center"
            cursor="pointer"
            ml={0}
          >
            <AiOutlineSearch
              color={isCurrentPage("/search") ? activeColor : ""}
              size={20}
            />
          </Box>
          {/* </a> */}
        </Link>
        <MyMenu />
      </footer>
      <Divider mt={5} mb={5} />
      <Text fontSize="md" mb={5}>
        The source code of this website is available{" "}
        <a href="https://github.com/carvalhochris/uys-js" target="_blank">
          on GitHub.
          <ExternalLinkIcon mx="2px" />
        </a>
      </Text>
      <Text mb={5}>
        This website was brought to you by{" "}
        <Link href={"https://beta.songcards.io"} target="#">
          <u>Songcards</u>
        </Link>
      </Text>
      <Text fontSize="md" mb={10}>
        © 2023 Unlock Your Sound Ltd |{" "}
        <Link
          href="/privacy"
          // legacyBehavior style={{ position: "relative" }}
        >
          {/* <a className="no-js"> */}
          Privacy Policy
          {/* </a> */}
        </Link>
      </Text>
      {/* </Container> */}
    </>
  );
}
