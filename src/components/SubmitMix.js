import { useEffect, useState } from "react";
import axios from "axios";
import {
  Spinner,
  Button,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

function SubmitMix() {
  //   const [inputs, setInputs] = useState({});
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

  const handleName = (event) => {
    handleError();
    const eventname = event.target.value;
    setNameValue(eventname);
    // setNameValue = event.target.name;
    console.log(nameValue);
  };

  const handleEmail = (event) => {
    handleError();
    const eventemail = event.target.value;
    setEmailValue(eventemail);
    // setNameValue = event.target.name;
    console.log(emailValue);
  };

  const handleLink = (event) => {
    handleError();
    const eventlink = event.target.value;
    setLinkValue(eventlink);
    console.log(linkValue);
  };

  const handleDesc = (event) => {
    handleError();
    const eventdesc = event.target.value;
    setDescValue(eventdesc);
    console.log(descValue);
  };

  const handleDiscover = (event) => {
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
    // event.preventDefault();
    // console.log(isPosting);
    const formData = new FormData();
    formData.append("name", nameValue);
    formData.append("email", emailValue);
    formData.append("link", linkValue);
    formData.append("desc", descValue);
    formData.append("disc", discValue);
    console.log("formData is...");
    console.log(formData);

    setTimeout(() => {
      console.log("Delayed for 1 second.");
      setIsPosting(false);
      setShowSuccess(true);
      axios.post("https://service.songcards.io/submit-mix", formData);
    }, 1000);
    // alert('sent!')
    // alert(inputs);
  };

  // const isError =

  return (
    <>
      <br />
      <br />
      <form
      // onSubmit={handleSubmit}
      >
        <label>
          <FormControl isRequired>
            <FormLabel>Enter your name:</FormLabel>
            <Input
              type="text"
              // value={nameValue}
              // name="name"
              // value={inputs.username || ""}
              onChange={handleName}
            />
          </FormControl>
        </label>
        <br />
        <br />
        {/* <label> */}
        <FormControl isRequired>
          <FormLabel>Enter your email:</FormLabel>
          <Input
            type="text"
            // isRequired
            // name="email"
            // value={inputs.age || ""}
            onChange={handleEmail}
          />
        </FormControl>
        {/* </label> */}
        {/* <br /> */}

        {/* <label>
          What best describes you? (Artist, Producer, Engineer?):
          <Input
            type="number"
            name="age"
            // value={inputs.age || ""}
            onChange={handleChange}
          />
        </label> */}

        {/* <label>
          Where can we hear yyour previous work?
          <Input
            type="number"
            name="age"
            // value={inputs.age || ""}
            onChange={handleChange}
          />
        </label> */}
        <br />
        {/* <label>
          What are you hoping to accomplish with this project?
          <input
            type="number"
            name="age"
            // value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>
        <br /> */}
        {/* <label> */}
        <FormControl isRequired>
          <FormLabel>Tell us a bit about you and the project</FormLabel>
          <Input
            type="text"
            // name="age"
            // value={inputs.age || ""}
            onChange={handleDesc}
          />
        </FormControl>
        {/* </label> */}
        {/* <br /> */}
        <br />
        {/* <label>
          What is your biggest obstacle at this time?
          <input
            type="number"
            name="age"
            // value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>
        <br /> */}
        {/* <label> */}
        <FormControl isRequired>
          <FormLabel>How did you discover Unlock Your Sound?</FormLabel>
          <Input
            type="text"
            // name="age"
            // value={inputs.age || ""}
            onChange={handleDiscover}
          />
        </FormControl>
        {/* </label> */}
        {/* <br /> */}
        <br />
        {/* <label> */}
        <FormControl isRequired>
          <FormLabel>Please provide a link to your track here</FormLabel>
          <Input
            type="text"
            // name="age"
            // value={inputs.age || ""}
            onChange={handleLink}
          />
        </FormControl>
        {/* </label> */}
        <br />
        {/* <input type="submit" /> */}
      </form>
      {isPosting && <Spinner />}
      {showSuccess && <p>sent!</p>}
      {!isError && <p>fill in required fields</p>}
      {isError && (
        <Button
          onClick={handleSubmit}
          mt={10}
          // mt={6}
          mb={5}
          size="lg"
          borderColor="grey"
          variant="outline"
          backgroundColor="#7756E3"
          color="white"
        >
          Submit Mix
        </Button>
      )}
    </>
  );
}

export default SubmitMix;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);
