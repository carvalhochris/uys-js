import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Container, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

// 16975

export default function Home({ pageContent }) {
  return (
    <div className={styles.main}>
      <Container maxW="xl">
        <Heading>Unlock Your Sound</Heading>
        <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>
      {/* <li>
        <Link href="/blog/hello-world">Blog Post</Link>
      </li> */}
    </ul>
        <div style={{ padding: "10px" }} dangerouslySetInnerHTML={{ __html: pageContent }}></div>
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios.get("https://unlockyoursound.com/wp-json/wp/v2/pages/16975");
  const pageContent = response.data.content.rendered;
  return {
    props: {
      pageContent,
    },
  };
}
