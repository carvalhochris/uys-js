import { useEffect } from 'react';

const CustomSubstackWidget = () => {
  useEffect(() => {
    window.CustomSubstackWidget = {
      substackUrl: "unlockyoursound.substack.com",
      placeholder: "example@gmail.com",
      buttonText: "Subscribe",
      theme: "custom",
      colors: {
        primary: "#FFFFFF",
        input: "#000000",
        email: "#FFFFFF",
        text: "#000000",
      }
    };

    const script = document.createElement('script');
    script.src = 'https://substackapi.com/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div id="custom-substack-embed">
      <iframe
        src="https://unlockyoursound.substack.com/embed"
        width="100%"
        height="320"
        style={{
          border: "1px solid #EEE",
          backgroundColor: "transparent"
        }}
        allowtransparency="true"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default CustomSubstackWidget;
