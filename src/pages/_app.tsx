import '@/styles/globals.css'
import { CSSReset, ChakraProvider, Container } from "@chakra-ui/react";
// import theme from '@/theme'
import theme from "../theme";
import "@fontsource/questrial";
import React from "react";
import type { AppProps } from "next/app";
import Command from "@/components/Command";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import HelloBar from "@/components/HelloBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
        <HelloBar />
      <Container maxW="xl">
        <Nav />
        <Component {...pageProps} />
        <Command />
        <Footer />
      </Container>
    </ChakraProvider>
  );
}
