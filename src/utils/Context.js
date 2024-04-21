import { createContext, useEffect, useRef, useState } from "react";
import { sendMsgToAI } from "./OpenAi";
import axios from 'axios';
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
    
    let response = "Sorry, I couldn't understand your question.";
  
    // Iterate through each item in details
    details.forEach((output) => {
      // Check if the user's message includes any keyword from output.questions
      if (text.includes(output.questions.toLowerCase())) {
        // Set the response to output.chatmessages
        response = output.chatmessages;
      }
    });
  
    // Add a delay of 1 second (1000 milliseconds) before showing the bot response
    setTimeout(() => {
      setMessage([
        ...message,
        { text, isBot: false },
        { text: response, isBot: true },
      ]);
    }, 500);
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
    
    let response = "Sorry, I couldn't understand your question.";
  
    // Iterate through each item in details
    details.forEach((output) => {
      // Check if the user's message includes any keyword from output.questions
      if (text.toLowerCase().includes(output.questions.toLowerCase())) {
        // Set the response to output.chatmessages
        response = output.chatmessages;
      }
    });
  
    setMessage([
      ...message,
      { text, isBot: false },
      { text: response, isBot: true },
    ]);
  };
  
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000')
      .then(res => {
        setDetails(res.data);
      })
      .catch(err => { });
  }, []);


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
      
{/* <header>Data Generated from Djangoo</header>
      <hr></hr>
      {details.map((output, id) => (
        <div key={id}>
          <div>
            <h2>{output.chatmessages}</h2>
            <h3>{output.questions}</h3>
          </div>
        </div>
      ))} */}
      {children}
    </ContextApp.Provider>
  );
};
export default AppContext;
