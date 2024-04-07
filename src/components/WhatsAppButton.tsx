// import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { WhatsappShareButton } from "react-share";

interface ShareProps {
  postSlug: string;
}

function ShareButton({ postSlug }: ShareProps) {
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
