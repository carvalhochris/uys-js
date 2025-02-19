import { Button, Center, Divider, Flex, Heading, Link } from "@chakra-ui/react";

export default function OnBoardingOne() {
  return (
    <>
      <Flex
        direction="column"
        justify="center"
        align="center"
        height="100vh" // Ensure full viewport height
        p={4} // Optional padding
      >
        <Heading
          size="md"
          as="h1"
          lineHeight={1.4}
          textAlign="center"
          letterSpacing={2}
        >
          we began exchanging about music and the industry and I had some calls
          with Chris in which he gave me great tips and guidance for the band ~ Corrine
        </Heading>
        <Divider mt={5} mb={5} />

        <Center>
          <Link href="/on-boarding-5">
            <Button
              mt={6}
              mb={0}
              size="lg"
              borderColor="grey"
              variant="outline"
              color="white"
            >
              Get Started
            </Button>
          </Link>
        </Center>
      </Flex>
    </>
  );
}
