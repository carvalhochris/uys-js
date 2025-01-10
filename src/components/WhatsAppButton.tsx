import { AiOutlineWhatsApp } from "react-icons/ai";
import { WhatsappShareButton } from "react-share";

interface ShareProps {
  postSlug: string;
}

function ShareButton({ postSlug }: ShareProps) {
  const domainUrl = "https://unlockyoursound.com";
  const shareUrl = `${domainUrl}/${postSlug}`;
  const message = "Saw this and thought of you :-)";

  return (
    <WhatsappShareButton url={shareUrl} title={message}>
      <AiOutlineWhatsApp size={30} />
    </WhatsappShareButton>
  );
}

export default ShareButton;
