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
          size="4xl"
          as="h1"
          lineHeight={1.4}
          textAlign="center"
          letterSpacing={2}
        >
          WE HELP MOTIVATED ARTISTS GET STUFF DONE
        </Heading>
        <Divider mt={5} mb={5} />

        <Center>
          <Link href="/on-boarding-2">
            <Button
              mt={6}
              mb={0}
              size="lg"
              borderColor="grey"
              variant="outline"
              color="white"
            >
              Sound like you?
            </Button>
          </Link>
        </Center>
      </Flex>
    </>
  );
}
