import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Container, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

// 16975

export default function Home({ pageContent }) {
  return (
    <div className={styles.main}>
      <Container maxW="xl">
        <Heading>Unlock Your Sound</Heading>
        <div style={{ padding: "10px" }} dangerouslySetInnerHTML={{ __html: pageContent }}></div>
      </Container>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("https://unlockyoursound.com/wp-json/wp/v2/pages/16975");
  const pageContent = response.data.content.rendered;
  return {
    props: {
      pageContent,
    },
  };
}
