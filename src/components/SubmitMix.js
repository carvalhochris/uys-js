import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner, Button, Input } from "@chakra-ui/react";

function SubmitMix() {
  //   const [inputs, setInputs] = useState({});
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [linkValue, setLinkValue] = useState("");
  const [descValue, setDescValue] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [discValue, setDiscoverValue] = useState("");

  useEffect(() => {
    setIsPosting(false);
  }, []);

  const handleName = (event) => {
    const eventname = event.target.value;
    setNameValue(eventname);
    // setNameValue = event.target.name;
    console.log(nameValue);
  };

  const handleEmail = (event) => {
    const eventemail = event.target.value;
    setEmailValue(eventemail);
    // setNameValue = event.target.name;
    console.log(emailValue);
  };

  const handleLink = (event) => {
    const eventlink = event.target.value;
    setLinkValue(eventlink);
    console.log(linkValue);
  };

  const handleDesc = (event) => {
    const eventdesc = event.target.value;
    setDescValue(eventdesc);
    console.log(descValue);
  };

  const handleDiscover = (event) => {
    const eventdisc = event.target.value;
    setDiscoverValue(eventdisc);
    console.log(discValue);
  };

  const handleSubmit = () => {
    setIsPosting(true);
    // event.preventDefault();
    console.log(isPosting);
    const formData = new FormData();
    formData.append("name", nameValue);
    formData.append("email", emailValue);
    formData.append("link", linkValue);
    formData.append("link", descValue);
    formData.append("link", discValue);
    console.log("formData is...");
    console.log(formData);
    setTimeout(() => {
      setIsPosting(false);
    }, 5000);

    // axios.post('https://service.songcards.io/submit-mix', formData);
    // alert(inputs);
  };

  return (
    <>
      <br />
      <br />
      <form
      // onSubmit={handleSubmit}
      >
        <label>
          Enter your name:
          <Input
            type="text"
            // value={nameValue}
            // name="name"
            // value={inputs.username || ""}
            onChange={handleName}
          />
        </label>
        <br />
        <br />
        <label>
          Enter your email:
          <Input
            type="text"
            // name="email"
            // value={inputs.age || ""}
            onChange={handleEmail}
          />
        </label>
        <br />
        
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
        <label>
          Tell us a bit about you and the project
          <Input
            type="text"
            // name="age"
            // value={inputs.age || ""}
            onChange={handleDesc}
          />
        </label>
        <br />
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
        <label>
          How did you discover Unlock Your Sound?
          <Input
            type="text"
            // name="age"
            // value={inputs.age || ""}
            onChange={handleDiscover}
          />
        </label>
        <br /><br />
        <label>
          Please provide a link to your track here
          <Input
            type="text"
            // name="age"
            // value={inputs.age || ""}
            onChange={handleLink}
          />
        </label>
        <br />
        {/* <input type="submit" /> */}
        <Button onClick={handleSubmit}
        mt={10}
        // mt={6}
        mb={5}
        size="lg"
        borderColor="grey"
        variant="outline"
        backgroundColor="#7756E3"
        color="white"
        
        
        >Submit Mix</Button>
      </form>
      {isPosting && <Spinner />}
    </>
  );
}

export default SubmitMix;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);
