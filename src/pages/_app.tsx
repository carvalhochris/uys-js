import "@/styles/globals.css";
import "@fontsource/questrial";

import { ChakraProvider, Container } from "@chakra-ui/react";

import type { AppProps } from "next/app";
import Command from "@/components/Command";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import theme from "../theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="xl">
        {/* <Nav /> */}
        <Component {...pageProps} />
        <Command />
        {/* <Footer /> */}
      </Container>
    </ChakraProvider>
  );
}
