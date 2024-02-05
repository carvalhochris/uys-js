import React from "react";
import {
  Card,
  // Center,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Divider,
  // Link,
  Stack,
  Grid,
  Center,
  Button,
  Box,
  // Image,
  Container,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";

const HelloBar = () => {
  const { colorMode } = useColorMode();

  const backgroundColor = colorMode === "light" ? "#000" : "#7756E3";
  const textColor = colorMode === "light" ? "white" : "white";

  return (
    <div className="hello-bar">
      <Box 
      // className="bg-violet-900"
      className="bg-[linear-gradient(to_right,theme(colors.violet.900),theme(colors.violet.600),theme(colors.violet.600),theme(colors.violet.700),theme(colors.violet.700),theme(colors.violet.800),theme(colors.violet.900))] inline-block text-white bg-[length:200%_auto]"

      // bg={backgroundColor} 
      w="100%" p={2} 
      // color={textColor}
      >
        <Center>
          <Box>
            <Text mt={1} mb={2}>
              Try our <Link href="https://ai.songcards.io/" target="#"><u>Free Music Artwork Generator</u> 🖌️</Link>
              
            </Text>
            {/* <br></br> */}
            {/* <Center>
              <Box mt={0} mb={2}>
                <a
                  target="#"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeIRf_Fl7JvdCSRr7AGFZCOhrlJvP1YLuVRxmE2uvayY59wPQ/viewform?usp=sf_link"
                >
                  <Button color="#7756E3" size="sm">
                    Sign up
                  </Button>
                </a>
              </Box>
            </Center> */}
          </Box>
        </Center>
      </Box>
    </div>
  );
};

export default HelloBar;