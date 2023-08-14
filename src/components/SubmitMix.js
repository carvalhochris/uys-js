import { useState } from "react";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";

function SubmitMix() {
  //   const [inputs, setInputs] = useState({});
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [linkValue, setLinkValue] = useState("");
  const [descValue, setDescValue] = useState("");
  const [isPosting, setIsPosting] = useState("");

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
    // setNameValue = event.target.name;
    console.log(linkValue);
  };

  const handleDesc = (event) => {};

  const handleDiscover = (event) => {};

  const handleChange = (event) => {
    // console.log("handleChange data is ...");
    // const nameValue = event.target.name;
    // console.log(nameValue)
    // const emailValue = event.target.email;
    // console.log(emailValue)
    // const formData = new FormData();
    // formData.append("name", nameValue);
    // formData.append("email", emailValue);
    // formData.append("link", linkValue);
    // console.log("formData is...")
    // console.log(formData)
    // setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPosting(true)
    const formData = new FormData();
    formData.append("name", nameValue);
    formData.append("email", emailValue);
    formData.append("link", linkValue);
    console.log("formData is...")
    console.log(formData)
    axios.post('https://service.songcards.io/submit-mix', formData)
    setIsPosting(false)

    // alert(inputs);
  };

  return (
    <>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
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
          <input
            type="text"
            // name="email"
            // value={inputs.age || ""}
            onChange={handleEmail}
          />
        </label>
        <br />
        <br />
        <label>
          What best describes you? (Artist, Producer, Engineer?):
          <input
            type="number"
            name="age"
            // value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Where can we hear yyour previous work?
          <input
            type="number"
            name="age"
            // value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>
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
          Please describe your project in detail
          <input
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
          <input
            type="text"
            // name="age"
            // value={inputs.age || ""}
            onChange={handleDiscover}
          />
        </label>
        <br />
        <label>
          Please provide a link to your track here
          <input
            type="text"
            // name="age"
            // value={inputs.age || ""}
            onChange={handleLink}
          />
        </label>
        <br />
        <input type="submit" />
      </form>
      {isPosting && <Spinner />}
    </>
  );
}

export default SubmitMix;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);
