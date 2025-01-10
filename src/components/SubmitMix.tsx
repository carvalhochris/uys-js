import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";

function SubmitMix() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [linkValue, setLinkValue] = useState("");
  const [descValue, setDescValue] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [discValue, setDiscoverValue] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsPosting(false);
    setIsError(false);
  }, []);

  const handleName = (event: ChangeEvent<HTMLInputElement>) => {
    handleError();
    const eventname = event.target.value;
    setNameValue(eventname);
    console.log(nameValue);
  };

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    handleError();
    const eventemail = event.target.value;
    setEmailValue(eventemail);
    console.log(emailValue);
  };

  const handleLink = (event: ChangeEvent<HTMLInputElement>) => {
    handleError();
    const eventlink = event.target.value;
    setLinkValue(eventlink);
    console.log(linkValue);
  };

  const handleDesc = (event: ChangeEvent<HTMLInputElement>) => {
    handleError();
    const eventdesc = event.target.value;
    setDescValue(eventdesc);
    console.log(descValue);
  };

  const handleDiscover = (event: ChangeEvent<HTMLInputElement>) => {
    handleError();
    const eventdisc = event.target.value;
    setDiscoverValue(eventdisc);
    console.log(discValue);
  };

  const handleError = () => {
    if (nameValue && emailValue && linkValue && descValue && discValue) {
      console.log("good");
      setIsError(true);
    } else {
      console.log("bad");
      setIsError(false);
    }
  };

  const handleSubmit = () => {
    setIsPosting(true);
    const formData = new FormData();
    formData.append("name", nameValue);
    formData.append("email", emailValue);
    formData.append("link", linkValue);
    formData.append("desc", descValue);
    formData.append("disc", discValue);
    console.log("formData is...");
    console.log(formData);

    setTimeout(() => {
      setIsPosting(true);
      axios
        .post("https://service.songcards.io/submit-mix", formData)
        .then(function (response) {
          console.log(response);
          setShowSuccess(true);
          setIsPosting(false);
        })
        .catch(function (error) {
          console.log(error);
          setShowSuccess(false);
          alert("There was an error, please check all required fields");
          setIsPosting(false);
        });
    });
  };

  return (
    <>
      <br />
      <br />
      <form>
        <label>
          <FormControl isRequired>
            <FormLabel>Enter your name:</FormLabel>
            <Input
              type="text"
              onChange={handleName}
            />
          </FormControl>
        </label>
        <br />
        <FormControl isRequired>
          <FormLabel>Enter your email:</FormLabel>
          <Input
            type="text"
            onChange={handleEmail}
          />
        </FormControl>
        <br />
        <FormControl isRequired>
          <FormLabel>Tell us a bit about you and the project</FormLabel>
          <Input
            type="text"
            onChange={handleDesc}
          />
        </FormControl>
        <br />
        <FormControl isRequired>
          <FormLabel>Please provide a link to your track here</FormLabel>
          <Input
            type="text"
            onChange={handleLink}
          />
        </FormControl>
        <br />
        <FormControl isRequired>
          <FormLabel>How did you discover Unlock Your Sound?</FormLabel>
          <Input
            type="text"
            onChange={handleDiscover}
          />
        </FormControl>
        <br />
      </form>
      {isPosting && <Spinner />}
      {showSuccess && (
        <p>Success! A member of the team will get back to you asap.</p>
      )}
      {!isError && (
        <>
          <Text fontSize="sm" color="red">
            * please fill in required fields
          </Text>
        </>
      )}
      <Button
        onClick={handleSubmit}
        mb={5}
        size="lg"
        borderColor="grey"
        variant="outline"
        backgroundColor="#7756E3"
        color="white"
      >
        Submit Mix
      </Button>
    </>
  );
}

export default SubmitMix;