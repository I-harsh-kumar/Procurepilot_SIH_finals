import React, { useRef, useEffect,useState } from 'react';
import Axios from 'axios';
import "./css/login.css"
import "./css/chatBot.css"

const ChatBot = () => {
  const [message, setMessage] = useState("Can i get some help?");
  const [answer, setAnswer] = useState("Sure! i'm well trained");
  const messageSectionRef = useRef(null);
const [dataArray, setDataArray] = useState([]);

   const addData = () => {
    setDataArray((prevData) => [...prevData, { message,answer }]);
  };
const config = {
  headers: {
    "x-api-key": "sec_17kxW4QETrQ4InpxRwDjNSUoXAYKMZwr",
    "Content-Type": "application/json",
  },
};

const data = {
  sourceId: "cha_PHeLwGLgJJiHDrAKWvOow",
  messages: [
    {
      role: "user",
      content: message,
    },
  ],
};

const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post("https://api.chatpdf.com/v1/chats/message", {
        sourceId: "cha_PHeLwGLgJJiHDrAKWvOow",
        messages: [
          {
            role: "user",
            content: message,
          },
        ],
      }, config);
      setAnswer(response.data.content);
    } catch (error) {
      console.error("Error:", error.message);
      console.log("Response:", error.response ? error.response.data : 'No response data');
    } 
  };
  useEffect(() => {
    if (messageSectionRef.current) {
      messageSectionRef.current.scrollTop = messageSectionRef.current.scrollHeight;
    }
  }, [answer]);
useEffect(() => {
    setAnswer(answer);
    addData();
    setMessage("");
  }, [answer]);
  
  return (
<div className="container mt-5">
<div class="card12">
    <div id="header">
      <h1>Procupilot</h1>
    </div>
    <div id="message-section" ref={messageSectionRef}>
      {/* <div class="message" id="bot"><span id="bot-response">Hello.. I'm listening! Go on..</span></div> */}
      {dataArray.map((data, index) => (
    <div key={index}>
      <div className='message' id='user'>{data.message}</div>
      <div className='message' id='bot'>{data.answer}</div>
    </div>
  ))}
    </div>
    <div id="input-section">
    <input
            id="input"
            type="text"
            placeholder="Type a message"
            autoComplete="off"
            autoFocus={true}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
      <button class="send" onClick={submitHandler}>
        <div class="circle"><i class="zmdi zmdi-mail-send"></i></div>
      </button>
    </div>
  </div>
</div> 

  )
}

export default ChatBot;
