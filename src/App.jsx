import { useState } from 'react';
import Background from './components/background';


function App() {
  const [messages, setMessages] = useState([]);
const [loading, setLoading] = useState(false);

  return (
   <div className="app">
     
   <Background 
    messages={messages}
  setMessages={setMessages}
  loading={loading}
  setLoading={setLoading}
   
   />
   </div>
  )
}

export default App
