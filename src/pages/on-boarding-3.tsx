import { Button, Center, Divider, Heading, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { ImQuotesLeft } from "react-icons/im";

export default function OnBoardingThree() {
  return (
    <Center minH="100vh">
      <VStack spacing={6} textAlign="center">
        <ImQuotesLeft size={60} />

        <Heading size="md" as="h1" lineHeight={1.4} letterSpacing={2} px={6}>
          I have worked now with Chris since 6 years. He is my mentor, my coach,
          my source of key knowledge, my music Google, my number one motivator,
          and also my biggest challenger. I wouldn't be where I am today in my
          career without his support ~ Cheri
        </Heading>

        <Divider />

        <Link href="/on-boarding-4">
          <Button size="lg" borderColor="grey" variant="outline">
            Learn more
          </Button>
        </Link>
      </VStack>
    </Center>
  );
}
