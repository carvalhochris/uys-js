import { Box, Divider, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillHeart, AiFillInfoCircle, AiOutlineSearch } from "react-icons/ai";
import MyMenu from "./MyMenu";

export default function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();

  const router = useRouter();
  const activeColor = "#7756E3";

  const isCurrentPage = (pathname: string) => {
    return router.pathname === pathname;
  };

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
        <Link href="/">
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
              />
            ) : (
              <Image
                src="https://unlockyoursound.io/wp-content/uploads/2019/05/cropped-cropped-inverted-1-1.png"
                alt="Unlock Your Sound dark logo"
                width={70}
                height={70}
              />
            )}
          </Box>
        </Link>
        <Link href="/free">
          <Box display="flex" alignItems="center" cursor="pointer" ml={0}>
            <AiFillHeart
              color={isCurrentPage("/free") ? activeColor : ""}
              size={20}
            />
          </Box>
        </Link>

        <Link href="/christopher-carvalho">
          <Box display="flex" alignItems="center" cursor="pointer" ml={0}>
            <AiFillInfoCircle
              color={isCurrentPage("/christopher-carvalho") ? activeColor : ""}
              size={20}
            />
          </Box>
        </Link>
        <Link href="/search">
          <Box display="flex" alignItems="center" cursor="pointer" ml={0}>
            <AiOutlineSearch
              color={isCurrentPage("/search") ? activeColor : ""}
              size={20}
            />
          </Box>
        </Link>
        <MyMenu />
      </footer>
      <Divider mt={5} mb={5} />
      <Text fontSize="md" mb={10}>
        © 2025 Unlock Your Sound Ltd |{" "}
        <Link href="/privacy">Privacy Policy</Link>
      </Text>
    </>
  );
}
