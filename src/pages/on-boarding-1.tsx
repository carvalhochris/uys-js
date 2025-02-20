import LogoOnlyFooter from "@/components/LogoOnlyFooter";
import { Button, Center, Divider, Heading, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function OnBoardingOne() {
  return (
    <Center minH="100vh">
      <VStack spacing={6} textAlign="center">
        <Heading
          size="2xl"
          as="h1"
          lineHeight={1.4}
          letterSpacing={2}
          width={300}
        >
          WE HELP MOTIVATED ARTISTS OVERCOME OBSTACLES
        </Heading>
        <Divider width={300} />
        <Link href="/on-boarding-2">
          <Button size="lg" borderColor="grey" variant="outline" mb={100}>
            Sound like you?
          </Button>
        </Link>
      </VStack>
      <LogoOnlyFooter />
    </Center>
  );
}
