import Link from "next/link";
import { useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { Divider, Container } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { AiFillInfoCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import MyMenu from "./MyMenu";
import { AiOutlineSearch } from "react-icons/ai";
import { FaDice } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import React from "react";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const textSize = 17;
  const router = useRouter();
  const activeColor = "#7756E3";

  const isCurrentPage = (pathname: string) => {
    return router.pathname === pathname;
  };

  return (
    <>
    {/* <Container maxW="xl"> */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 35,
          // textDecoration: "none",
        }}
      >
        <Link
          href="/"
          // legacyBehavior
          // style={{ position: "relative" }}
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
                // maxWidth={70}
              />
            ) : (
              <Image
                src="https://unlockyoursound.io/wp-content/uploads/2019/05/cropped-cropped-inverted-1-1.png"
                alt="Unlock Your Sound dark logo"
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
              size={20}
              color={isCurrentPage("/search") ? activeColor : ""}
            />
          </Box>
          {/* </a> */}
        </Link>
        <MyMenu />
      </nav>
      <Divider mt={5} mb={5} />
      {/* </Container> */}
    </>
  );
}
