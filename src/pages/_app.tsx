import "@/styles/globals.css";
import { ChakraProvider, Container } from "@chakra-ui/react";
import Command from "@/components/Command";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "@fontsource/questrial";
import type { AppProps } from "next/app";
import theme from "../theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      {/* <HelloBar /> */}
      <Container maxW="xl">
        <Nav />
        <Component {...pageProps} />
        <Command />
        <Footer />
      </Container>
    </ChakraProvider>
  );
}
