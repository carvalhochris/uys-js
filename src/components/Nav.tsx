import { Box, Divider, Spacer, Text, useColorMode } from "@chakra-ui/react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();
  const activeColor = "#7756E3";

  const isCurrentPage = (pathname: string) => {
    return router.pathname === pathname;
  };

  const navColor = colorMode == "dark" ? "black" : "white";

  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
          position: "sticky",
          top: 0,
          paddingTop: 6,
          zIndex: 99,
          backgroundColor: navColor,
          minHeight: 100
        }}
      >
        <Link href="/">
          <Box mr={0} display="flex" alignItems="center" cursor="pointer">
            {colorMode === "light" ? (
              <Image
                src="https://unlockyoursound.io/wp-content/uploads/2019/05/Unlock-Your-Sound-01.png"
                alt="Unlock Your Sound light logo"
                width={70}
                height={10}
              />
            ) : (
              <Image
                src="https://unlockyoursound.io/wp-content/uploads/2019/05/cropped-cropped-inverted-1-1.png"
                alt="Unlock Your Sound dark logo"
                width={70}
                height={10}
              />
            )}
          </Box>
        </Link>
        <Spacer width={50} />
        <Link href="/free">
          <Box display="flex" alignItems="center" cursor="pointer" ml={0}>
            <Text style={{ fontWeight: 450 }}>FREE RESOURCES</Text>
          </Box>
        </Link>
      </nav>
      <Divider mt={0} mb={10} />
    </>
  );
}
