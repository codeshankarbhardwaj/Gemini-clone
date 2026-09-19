import './Input.css'
import { FaMicrophone } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import { askGemini } from "../services/API";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';



function Input({ messages, setMessages, loading, setLoading }){

  const [query, setQuery] = useState("");
    const [modelOpen, setModelOpen] = useState(false);

    
  const handleSubmit = async () => {
    if (!query.trim()) return;
 const userMsg = { role: "user", text: query };
  setMessages((prev) => [...prev, userMsg]);
  setQuery("");
  setLoading(true);
    try {
    const response = await askGemini(query);
    setMessages((prev) => [...prev, { role: "ai", text: response }]);
  } catch (error) {
    console.error("Gemini API Errors:", error);
    setMessages((prev) => [...prev, { role: "ai", text: "Error, try again." }]);
  } finally {
    setLoading(false);
  }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return(
        
     


    <div className="chat-wrapper">
   {messages.length === 0 &&
    <div className="greeting-wrapper">
   <p className="greeting">Hi, Shankar. What's on your mind?</p>
    </div>}

<div className="chat-window">
  {messages.map((msg, i) => (
    <div key={i} className={`chat-row ${msg.role}`}>
    <div className={`chat-bubble ${msg.role}`}>
       {msg.role === "ai" ? (
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.text}</ReactMarkdown>
      ) : (
        msg.text
      )}
    </div>
    </div>
  ))}
  {loading &&(
    <div className="chat-row ai">
    <div className="chat-bubble ai">Typing...</div>
</div>
  
)}
   <div class="search-bar">
  <button class="icon-btn">+</button>
  <input placeholder="Ask Gemini" 
         value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}>
      
        </input>
  <button class="model-select"
   onClick={() => setModelOpen(!modelOpen)}>
  
           <IoIosArrowDown size={18} /></button>



           
  <button class="icon-btn"><FaMicrophone /></button>
</div>
    </div>
 </div>
  )
}

export default Input;