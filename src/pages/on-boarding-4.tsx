import { Button, Center, Divider, Heading, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { ImQuotesLeft } from "react-icons/im";

export default function OnBoardingFour() {
  return (
    <Center minH="100vh">
      <VStack spacing={6} textAlign="center">
        <ImQuotesLeft size={60} />

        <Heading size="md" as="h1" lineHeight={1.4} letterSpacing={2} px={6}>
          We began exchanging about music and the industry, and I had some calls
          with Chris in which he gave me great tips and guidance for the band ~
          Corrine
        </Heading>

        <Divider />

        <Link href="/on-boarding-5">
          <Button size="lg" borderColor="grey" variant="outline">
            Get Started
          </Button>
        </Link>
      </VStack>
    </Center>
  );
}
