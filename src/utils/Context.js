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
      text: "",
      isBot: true,
    },
  ]);
  
  useEffect(() => {
    const initialMessage =
      "Hi, I'm ChatBot ISay-A, Please feel free to ask me about SEA at Holy Angel University or let me know how I can assist you today!";
    let typedMessage = "";
  
    for (let i = 0; i < initialMessage.length; i++) {
      setTimeout(() => {
        typedMessage += initialMessage[i];
        setMessage([{ text: typedMessage, isBot: true }]);
      }, 10 * i);
    }
  }, []);
  
  const msgEnd = useRef(null);

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [message]);


  const handleSend = async () => {
    const text = chatValue.toLowerCase();
    setChatValue("");
    setMessage([...message, { text, isBot: false }]);
    
    let response;
    
    details.forEach((output) => {
        if (text.includes(output.questions.toLowerCase())) {
            response = output.chatmessages;
        }
    });
  
    if (!response) {
        if (text.includes("courses")) {
            response = "The School of Engineering and Architecture (SEA) offers various courses including Computer Engineering, Civil Engineering, Electrical Engineering, and Architecture.";
        } else if (text.includes("cpe course")) {
            response = "The Bachelor of Science in Computer Engineering (BSCpE) is a program that embodies the Science and technology of design, development, implementation, maintenance and integration of software and hardware components in modern computing systems and computer- controlled equipment.";
        } else if (text.includes("history")) {
            response = "The School of Engineering and Architecture (SEA), formerly College of Engineering, was established on July 23, 1963, starting with one-year general engineering course. Through the years the college expanded its degree programs, and in 1991 the Bachelor of Science and Electronics and Communications Engineering (BSECE), now Bachelor of Science in Electronics Engineering was offered and may be considered first in Region III. The BSECE program was given government recognition two years after its initial offering. On August 30, 1993, it was conferred Level 1 accreditation by the Philippine Accrediting Association of Schools, Colleges, and Universities (PAASCU). On June 30, 1995, the program attained Level 2 accreditation by Federation of Accrediting Agencies of the Philippines (FAAP) through PAASCU. In 2008, the Graduate School enriched its programs through the inclusion of Master of Science in Electronics and Communications Engineering. The School of Engineering and Architecture exerts considerable effort in strengthening its engineering education. On May 2020, PAASCU presented Level 2 re-accredited status to the BSECE program.";
        } else if (text.includes("hello")) {
            response = "Hi, I'm ISay-A, How can I assist you today?";
        } else if (text.includes("vision")) {
            response = "A center of excellence in engineering and architecture education imbued with Catholic mission and identity serving as a role-model catalyst for countryside development";
        } else if (text.includes("mission")) {
            response = "The School shall provide accessible quality engineering and architecture education leading to highly competent professional; continually contribute to the advancement of knowledge and technology through research activities; and support countryside development through environmental preservation and community involvement.";
        } else if (text.includes("objective")) {
            response = "In its pursuit for academic excellence and to become an authentic instrument for countryside development, the School of Engineering and Architecture aims to achieve the following objectives:";
        } else if (text.includes("hi")) {
            response = "Hi, How are you?";  
        }
    }
    
    if (!response && text.includes("map")) {
        response = "../../map.jpg";
    } else if (!response) {
        response = "Please ask questions like The campus map in HAU, more details about CpE Course, or All Courses in SEA. Also, you can inquire about the history, vision, and mission. Just type it for quick answers. Thanks!";
    }
    
    if (response.includes('.jpg') || response.includes('.png')) {
        setMessage([
            ...message,
            { text, isBot: false },
            { text: <img src={response} alt="Bot" className="w-100 h-100 object-cover rounded-sm" />, isBot: true },
        ]);
    } else {
        let typedResponse = "";
        for (let i = 0; i < response.length; i++) {
            setTimeout(() => {
                typedResponse += response[i];
                setMessage([
                    ...message,
                    { text, isBot: false },
                    { text: typedResponse, isBot: true },
                ]);
            }, 5 * i);
        }
    }
};

  
  

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleQuery = async (e) => {
    const text = e.target.innerText.toLowerCase();
    setMessage([...message, { text, isBot: false }]);
    
    let response;
  
    if (text.toLowerCase().includes("map")) {
      response = "../../map.jpg";
    } else {
      details.forEach((output) => {
        if (text.toLowerCase().includes(output.questions.toLowerCase())) {
          response = output.chatmessages;
        }
      });
    }
    
    if (!response) {
      if (text.includes("courses")) {
        response = "The School of Engineering and Architecture (SEA) offers various courses including Computer Engineering, Civil Engineering, Electrical Engineering, and Architecture.";
      } else if (text.includes("cpe course")) {
        response = "The Bachelor of Science in Computer Engineering (BSCpE) is a program that embodies the Science and technology of design, development, implementation, maintenance and integration of software and hardware components in modern computing systems and computer-controlled equipment.";
      } else if (text.includes("history")) {
        response = "The School of Engineering and Architecture (SEA), formerly College of Engineering, was established on July 23, 1963, starting with one-year general engineering course. Through the years the college expanded its degree programs, and in 1991 the Bachelor of Science and Electronics and Communications Engineering (BSECE), now Bachelor of Science in Electronics Engineering was offered and may be considered first in Region III. The BSECE program was given government recognition two years after its initial offering. On August 30, 1993, it was conferred Level 1 accreditation by the Philippine Accrediting Association of Schools, Colleges, and Universities (PAASCU). On June 30, 1995, the program attained Level 2 accreditation by Federation of Accrediting Agencies of the Philippines (FAAP) through PAASCU. In 2008, the Graduate School enriched its programs through the inclusion of Master of Science in Electronics and Communications Engineering. The School of Engineering and Architecture exerts considerable effort in strengthening its engineering education. On May 2020, PAASCU presented Level 2 re-accredited status to the BSECE program.";
      } else if (text.includes("hello")) {
        response = "Hi, I'm ISay-A, How can I assist you today?";
      } else if (text.includes("vision")) {
        response = "A center of excellence in engineering and architecture education imbued with Catholic mission and identity serving as a role-model catalyst for countryside development";
      } else if (text.includes("mission")) {
        response = "The School shall provide accessible quality engineering and architecture education leading to highly competent professional; continually contribute to the advancement of knowledge and technology through research activities; and support countryside development through environmental preservation and community involvement.";
      } else if (text.includes("objective")) {
        response = "In its pursuit for academic excellence and to become an authentic instrument for countryside development, the School of Engineering and Architecture aims to achieve the following objectives:";
      } else if (text.includes("hi")) {
        response = "Hi, How are you?";  
      } else {
        response = "Sorry, I couldn't understand your question. Please ask questions like The campus map in HAU, more details about CpE Course, or All Courses in SEA. Also, you can inquire about the history, vision, and mission. Just type it for quick answers. Thanks!";
      }
    }
    
    if (response.includes('.jpg') || response.includes('.png')) {
      setMessage([
        ...message,
        { text, isBot: false },
        { text: <img src={response} alt="Bot" className="w-100 h-100 object-cover rounded-sm" />, isBot: true },
      ]);
    } else {
      let typedResponse = "";
      for (let i = 0; i < response.length; i++) {
        setTimeout(() => {
          typedResponse += response[i];
          setMessage([
            ...message,
            { text, isBot: false },
            { text: typedResponse, isBot: true },
          ]);
        }, 5 * i);
      }
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
