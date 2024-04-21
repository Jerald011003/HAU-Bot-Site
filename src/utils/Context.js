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
  
    let response;
  
    // Check if the user's message includes keywords related to maps
    details.forEach((output) => {
      // Check if the user's message includes any keyword from output.questions
      if (text.includes(output.questions.toLowerCase())) {
        // Set the response to output.chatmessages
        response = output.chatmessages;
      }
    });
  
    // If the response is still not set, and if text includes map, display map image
    if (!response && text.includes("map")) {
      // Set the response to the path of the map image
      response = "../../map.jpg"; // Replace with the actual path to the map image
    } else if (!response) {
      // If response is still not set, display default message
      response = "Sorry, I couldn't understand your question.";
    }
  
    // If the response is an image, wrap it in the image tag
    if (response.includes('.jpg') || response.includes('.png')) {
      setMessage([
        ...message,
        { text, isBot: false },
        { text: <img src={response} alt="Bot" className="w-100 h-100 object-cover rounded-sm" />, isBot: true },
      ]);
    } else {
      // Add a delay before showing the bot response
      setTimeout(() => {
        setMessage([
          ...message,
          { text, isBot: false },
          { text: response, isBot: true },
        ]);
      }, 200);
    }
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
    
    let response;
  
    // Check if the user's message includes keywords related to maps
    if (text.toLowerCase().includes("map")) {
      // Set the response to the path of the map image
      response = "../../map.jpg"; // Replace with the actual path to the map image
    } else {
      // Iterate through each item in details
      details.forEach((output) => {
        // Check if the user's message includes any keyword from output.questions
        if (text.toLowerCase().includes(output.questions.toLowerCase())) {
          // Set the response to output.chatmessages
          response = output.chatmessages;
        }
      });
    }
  
    // If response is still not set, display default message
    if (response.includes('.jpg') || response.includes('.png')) {
      setMessage([
        ...message,
        { text, isBot: false },
        { text: <img src={response} alt="Bot" className="w-100 h-100 object-cover rounded-sm" />, isBot: true },
      ]);
    } else {
      // Add a delay before showing the bot response
      setTimeout(() => {
        setMessage([
          ...message,
          { text, isBot: false },
          { text: response, isBot: true },
        ]);
      }, 200);
    }
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
