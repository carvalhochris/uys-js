import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  colors: {
    dark: {
      900: "#010101",
    },
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        bg: props.colorMode === "dark" ? "dark.900" : "white",
        color: props.colorMode === "dark" ? "white" : "black",
      },
    }),
  },
});

export default theme;
