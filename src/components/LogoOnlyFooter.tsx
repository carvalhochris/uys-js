import { Box, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function LogoOnlyFooter() {
  const { colorMode } = useColorMode();

  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor={colorMode === "dark" ? "black" : "white"}
      height={100}
    >
      <Link href="/">
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
      </Link>
    </Box>
  );
}
