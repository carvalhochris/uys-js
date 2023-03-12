// import React from "react";
import { WhatsappShareButton } from "react-share";
import { Button } from "@chakra-ui/react";
import { AiOutlineWhatsApp } from "react-icons/ai";

function ShareButton({ postSlug }) {
  const domainUrl = "https://unlockyoursound.com";
  const shareUrl = `${domainUrl}/${postSlug}`;
  const message = "Saw this and thought of you :-)";
  // console.log("share url is...", shareUrl)

  return (
    // <Button colorScheme="green" mt={10}>
    <WhatsappShareButton url={shareUrl} title={message}>
      <AiOutlineWhatsApp size={30} />
    </WhatsappShareButton>
    // </Button>
  );
}

export default ShareButton;
