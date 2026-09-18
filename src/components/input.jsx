import './Input.css'


function Input(){

  return(
    <div className="main-area">
    <p>Hi, Shankar. What's on your mind?</p>
   <div class="search-bar">
  <button class="icon-btn">+</button>
  <textarea placeholder="Ask Gemini" rows="1"></textarea>
  <button class="model-select">Flash ▾</button>
  <button class="icon-btn">🎤</button>
</div>
    </div>
  )
}

export default Input;