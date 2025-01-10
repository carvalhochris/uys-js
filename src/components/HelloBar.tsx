import { Box, Center, Text } from "@chakra-ui/react";
import Link from "next/link";

const HelloBar = () => {
  return (
    <div className="hello-bar">
      <Box
        className="bg-[linear-gradient(to_right,theme(colors.violet.900),theme(colors.violet.600),theme(colors.violet.600),theme(colors.violet.700),theme(colors.violet.700),theme(colors.violet.800),theme(colors.violet.900))] inline-block text-white bg-[length:200%_auto]"
        w="100%"
        p={2}
      >
        <Center>
          <Box>
            <Text mt={1} mb={2}>
              Sponsored by{" "}
              <Link href="https://beta.songcards.io/" target="#">
                <u>Songcards</u> 🚀
              </Link>
            </Text>
          </Box>
        </Center>
      </Box>
    </div>
  );
};

export default HelloBar;
