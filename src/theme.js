// theme.js

import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  colors: {
    dark: {
      900: "#010101", // set the background color for dark mode
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "dark.900" : "white", // use the custom background color for dark mode
      },
    }),
  },
});

export default theme;
