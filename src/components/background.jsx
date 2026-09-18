import Input from "./input";

function Background ({ messages, setMessages, loading, setLoading }) {

  return(
    <div className="outer-background">
  <div className="inner-background">

    <button class="upgrade-btn">
      Upgrade
    </button>
    <Input
     messages={messages}
  setMessages={setMessages}
  loading={loading}
  setLoading={setLoading}
    />
  </div>
  
    </div>
  )
}

export default Background;