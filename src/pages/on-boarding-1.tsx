import { Button, Center, Divider, Heading } from "@chakra-ui/react";
import Link from "next/link";

export default function OnBoardingOne() {
  return (
    <>
      <Center>
        <Heading
          size="4xl"
          as="h1"
          lineHeight={1.4}
          textAlign="center"
          letterSpacing={2}
          mt={100}
        >
          WE HELP MOTIVATED ARTISTS GET STUFF DONE
        </Heading>
      </Center>
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
    </>
  );
}
