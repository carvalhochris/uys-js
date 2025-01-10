import styles from "@/styles/Home.module.css";
import { Container, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function PrivacyPage() {
  return (
    <>
      <Head>
        <title>Privacy</title>
        <meta
          name="description"
          content="Learn what we do and don't do with your data"
        />
        <meta name="keywords" content="Music production, business, marketing" />
        <meta property="og:title" content="Privacy" />
        <meta
          property="og:description"
          content="Learn what we do and don't do with your data"
        />
        <meta
          property="og:image"
          content="http://unlockyoursound.com/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />
        <meta property="og:url" content="http://unlockyoursound.com/privacy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Privacy" />
        <meta
          name="twitter:description"
          content="Learn what we do and don't do with your data"
        />
        <meta
          name="twitter:image"
          content="http://unlockyoursound.com/wp-content/uploads/2021/04/unlock-your-sound-blog-scaled.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.main}>
        <Container maxW="xl">
          <Heading as="h1">Privacy</Heading>
          <Text>
            This policy explains how we collect, use, and share your personal
            information. <br></br>
            <br></br>
            <b>We do not use cookies on this site</b>, so we do not collect any
            personal information through cookies.<br></br>
            <br></br>However, we may collect other types of personal information
            that you provide to us directly, such as your name, email address,
            or other contact information. <br></br>
            <br></br>We will only use your personal information to provide you
            with the products and services that you have requested. <br></br>
            <br></br>We may use third-party services, such as Substack, for
            email marketing purposes. If you sign up for our email list, we will
            provide your name and email address to Substack in order to send you
            marketing emails.<br></br>
            <br></br>You can unsubscribe from our email list at any time by
            clicking the &quot;unsubscribe&quot; link in our emails. <br></br>
            <br></br>We will not sell or share your personal information with
            third parties for marketing purposes. <br></br>
            <br></br>We take reasonable measures to protect your personal
            information from unauthorized access, use, or disclosure. However,
            we cannot guarantee the security of your information, and you use
            our app at your own risk. <br></br>
            <br></br>We may update this privacy policy from time to time. If we
            make significant changes to the policy, we will update this page
            accordingly.<br></br>
            <br></br>If you have any questions or concerns about this privacy
            policy, please contact us at enquries@unlockyoursound.com
          </Text>
        </Container>
      </div>
    </>
  );
}
