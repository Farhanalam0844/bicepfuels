import React, { useState } from "react";


const WhatsappChatbot = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSendMessage = async () => {
    const response = await fetch("/your-twilio-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();
    setResponse(data.message);
  };

  return (
    <div className="container">
      <textfield
        label="Message"
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="textfield"
      />
      <button variant="contained" className="button" onClick={handleSendMessage}>
        Send
      </button>
      {response && <p className="response">{response}</p>}
    </div>
  );
};

export default WhatsappChatbot;
