import { Html, Head, Main, NextScript } from "next/document";
import NavNavNav from "@/components/navnavnav";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Unlock Your Sound</title>
      <meta property="title" content="Unlock Your Sound" key="title" />
      <meta name="description" content="The Artist Self-Development Platform"></meta>
      <meta property="og:title" content="Unlock Your Sound" />
      <meta property="og:image" content="https://unlockyoursound.com/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg" />
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@500&display=swap" rel="stylesheet" /> */}
      {/* <NavNavNav /> */}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
