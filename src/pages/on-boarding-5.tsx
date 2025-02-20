import { Button, Center, Divider, Heading, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function OnBoardingFive() {
  return (
    <Center minH="100vh">
      <VStack spacing={6} textAlign="center">
        <Heading size="md" as="h1" lineHeight={1.4} letterSpacing={2} px={6}>
          WE&apos;VE WORKED WITH TUNECORE, DISTROKID, LANDR, PIRATE STUDIOS, AND
          MANY OTHERS
        </Heading>

        <Divider width={300} />

        <Link target="_blank" href="https://unlockyoursound.typeform.com/to/LuG8KG4y">
          <Button size="lg" borderColor="grey" variant="outline">
            Work With Us
          </Button>
        </Link>
      </VStack>
    </Center>
  );
}
