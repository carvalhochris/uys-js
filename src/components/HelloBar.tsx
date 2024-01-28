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
} from "@chakra-ui/react";
import Link from "next/link";

const HelloBar = () => {
  return (
    <div className="hello-bar">
      <Box bg="#7756E3" w="100%" p={2} color="white">
        <Center>
          <Box>
            <Text mt={1} mb={2}>
              Try our <Link href="https://ai.songcards.io/" target="#"><u>FREE Album Artwork Generator</u> 🖌️</Link>
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