import { Button, Center, Divider, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { ImQuotesLeft } from "react-icons/im";

export default function OnBoardingThree() {
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
          I have worked now with Chris since 6 years. He is my Mentor, my coach,
          my Source of key knowledge, my music Google, my mumber one motivator
          and also my biggest challenger. I wouldnt be where I am today in my
          career without his support ~ Cheri
        </Heading>
        <Divider mt={5} mb={5} />

        <Center>
          <Link href="/on-boarding-4">
            <Button
              mt={6}
              mb={0}
              size="lg"
              borderColor="grey"
              variant="outline"
              color="white"
            >
              Learn more
            </Button>
          </Link>
        </Center>
      </Flex>
    </>
  );
}
