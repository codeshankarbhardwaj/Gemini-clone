import './Input.css'
import { FaMicrophone } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import { askGemini } from "../services/API";
function Input(){
  const [query, setQuery] = useState("");
    const [modelOpen, setModelOpen] = useState(false);

    
  const handleSubmit = async () => {
    if (!query.trim()) return;
    try {
      const response = await askGemini(query);
      console.log("User:", query);
      console.log("Gemini:", response);
    } catch (error) {
      console.error("Gemini API Errors:", error);
    }
    setQuery("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return(
        
     


    <div className="main-area">
    <p>Hi, Shankar. What's on your mind?</p>
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
  )
}

export default Input;