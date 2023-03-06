import axios from "axios";
import React, { useState, useEffect } from "react";
// import { Container } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import { Container, Heading } from "@chakra-ui/react";

export default function About() {
  const [pageContent, setPageContent] = useState("");

  useEffect(() => {
    axios
      .get("https://unlockyoursound.com/wp-json/wp/v2/pages/14091")
      .then((response) => {
        setPageContent(response.data.content.rendered);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    // <Container maxW="sm" bg="blue.600" color="white">
    <div className={styles.main}>
      <Container maxW="xl">
        <Heading>Christopher Carvalho</Heading>
        {/* <h1>Page Content:</h1> */}
        <div
          style={{padding: '10px'}}
          dangerouslySetInnerHTML={{ __html: pageContent }}
        ></div>
      </Container>
    </div>
    // </Container>
  );
}
