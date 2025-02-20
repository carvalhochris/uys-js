import { Button, Center, Divider, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { ImQuotesLeft } from "react-icons/im";

export default function OnBoardingFour() {
  return (
    <>
      <Flex
        direction="column"
        justify="center"
        align="center"
        height="100vh" // Ensure full viewport height
        p={4} // Optional padding
      >
        <ImQuotesLeft size={60} />

        <Heading
          size="md"
          as="h1"
          lineHeight={1.4}
          textAlign="center"
          letterSpacing={2}
          mt={10}
        >
          we began exchanging about music and the industry and I had some calls
          with Chris in which he gave me great tips and guidance for the band ~
          Corrine
        </Heading>
        <Divider mt={10} mb={5} />

        <Center>
          <Link href="/on-boarding-5">
            <Button
              mt={6}
              mb={0}
              size="lg"
              borderColor="grey"
              variant="outline"
            >
              Get Started
            </Button>
          </Link>
        </Center>
      </Flex>
    </>
  );
}
