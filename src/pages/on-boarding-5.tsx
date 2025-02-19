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
          WE&apos;VE WORKED WITH TUNECORE, DISTROKID, LANDR, PIRATE STUDIOS AND MANY
          OTHERS
        </Heading>
        <Divider mt={5} mb={5} />

        <Center>
          <Link
            target="_blank"
            href="https://unlockyoursound.typeform.com/to/LuG8KG4y"
          >
            <Button
              mt={6}
              mb={0}
              size="lg"
              borderColor="grey"
              variant="outline"
              color="white"
            >
              Work With Us
            </Button>
          </Link>
        </Center>
      </Flex>
    </>
  );
}
