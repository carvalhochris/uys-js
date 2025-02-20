import { Button, Center, Divider, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function OnBoardingOne() {
  return (
    <>
      <Center>
        <Heading
          size="2xl"
          as="h1"
          lineHeight={1.4}
          textAlign="center"
          letterSpacing={2}
          mt={100}
          width={300}
        >
          WE HELP MOTIVATED ARTISTS OVERCOME HURDLES
        </Heading>
      </Center>
      <Center>
        <Divider mt={10} mb={10} width={300} />
      </Center>

      <Center>
        <Link href="/on-boarding-2">
          <Button mt={6} mb={0} size="lg" borderColor="grey" variant="outline">
            Sound like you?
          </Button>
        </Link>
      </Center>
    </>
  );
}
