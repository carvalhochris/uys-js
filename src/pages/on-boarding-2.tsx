import { Button, Center, Divider, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import { ImQuotesLeft } from "react-icons/im";

export default function OnBoardingTwo() {
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
          size="sm"
          as="h1"
          lineHeight={1.4}
          textAlign="center"
          letterSpacing={2}
          mt={10}
        >
          After I talked with Chris he immediately knew what to do and we set up
          a goal, suddenly I managed to produce 5 songs in just 8 weeks! So I
          made this EP called Pure which started my whole carer. Now 6 years
          later, I have over 9 million streams, signed a contract with the
          world’s biggest Dance Label Spinnin Records, performed at the biggest
          festivals here in Norway and am about to warm up for Tiesto concert in
          December! This is all thanks to Chris who put in so much time and
          energy with helping me, something I will never forget. He is a very
          genuine guy and very passionate about what he is doing ~ Labi
        </Heading>
        <Divider mt={5} mb={5} />

        <Center>
          <Link href="/on-boarding-3">
            <Button
              mt={6}
              mb={0}
              size="lg"
              borderColor="grey"
              variant="outline"
            >
              Learn more
            </Button>
          </Link>
        </Center>
      </Flex>
    </>
  );
}
