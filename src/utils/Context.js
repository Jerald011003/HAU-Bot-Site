import { createContext, useEffect, useRef, useState } from "react";
import { sendMsgToAI } from "./OpenAi";
export const ContextApp = createContext();

const AppContext = ({ children }) => {
  const [showSlide, setShowSlide] = useState(false);
  const [Mobile, setMobile] = useState(false);
  const [chatValue, setChatValue] = useState("");

  const [message, setMessage] = useState([
    {
      text: "Hi, I'm ChatBot ISay-A,  Please feel free to ask me about SEA at Holy Angel University or let me know how I can assist you today!",
      isBot: true,
    },
  ]);
  const msgEnd = useRef(null);

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [message]);

  // button Click function
  const handleSend = async () => {
  const text = chatValue.toLowerCase(); // Convert the input text to lowercase
  setChatValue("");
  setMessage([...message, { text, isBot: false }]);
  
  // Simulated AI response
  let response;
  const lowercaseText = text.toLowerCase(); // Convert the input text to lowercase
  
  if (lowercaseText.includes("courses")) {
    response = "The School of Engineering and Architecture (SEA) offers various courses including Computer Engineering, Civil Engineering, Electrical Engineering, and Architecture.";
  } else if (lowercaseText.includes("hello")) {
    response = "Hi, I'm ChatBot ISay-A, How can I assist you today?";
  } else if (lowercaseText.includes("cpe course")) {
    response = "Computer Engineering is a discipline that integrates several fields of computer science and electronics engineering to develop computer hardware and software.";
  } else {
    response = "Sorry, I couldn't understand your question.";
  }

  setMessage([
    ...message,
    { text, isBot: false },
    { text: response, isBot: true },
  ]);
};


  // Enter Click function
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  // Query Click function
  const handleQuery = async (e) => {
    const text = e.target.innerText;
    setMessage([...message, { text, isBot: false }]);
    
    // Simulated AI response
    let response;
    if (text.includes("courses offered")) {
      response = "The School of Engineering and Architecture (SEA) offers various courses including Computer Engineering, Civil Engineering, Electrical Engineering, and Architecture.";
    } else if (text.includes("Computer Engineering Course")) {
      response = "Computer Engineering is a discipline that integrates several fields of computer science and electronics engineering to develop computer hardware and software.";
    } else {
      response = "Sorry, I couldn't understand your question.";
    }
  
    setMessage([
      ...message,
      { text, isBot: false },
      { text: response, isBot: true },
    ]);
  };


  return (
    <ContextApp.Provider
      value={{
        showSlide,
        setShowSlide,
        Mobile,
        setMobile,
        chatValue,
        setChatValue,
        handleSend,
        message,
        msgEnd,
        handleKeyPress,
        handleQuery,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};
export default AppContext;
