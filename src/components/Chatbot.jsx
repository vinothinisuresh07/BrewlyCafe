import { useState } from "react";

function getReply(text) {
  const t = text.toLowerCase();

  if (t === "hi" || t.includes("hello") || t.includes("hey")) {
    return "Hello! 😊 Ask me about our menu, combos, opening hours or address.";
  }
  if (t.includes("hour") || t.includes("open") || t.includes("time")) {
    return "We're open Mon–Fri 8 AM–10 PM and Sat–Sun 9 AM–11 PM.";
  }
  if (t.includes("combo") || t.includes("offer") || t.includes("deal")) {
    return "Our combos: Coffee & Cake ₹330, Breakfast ₹330, Sweet Treat ₹340. Find them in the Specials section!";
  }
  if (t.includes("address") || t.includes("where") || t.includes("location")) {
    return "You'll find us at 12, Cafe Street, Chennai, Tamil Nadu.";
  }
  if (t.includes("menu") || t.includes("food") || t.includes("eat")) {
    return "We serve pancakes, cheesecake, profiteroles, cappuccino, baked eggs, croissant, a pineapple veg burger and a granola fruit bowl.";
  }
  if (t.includes("coffee") || t.includes("cappuccino")) {
    return "Our Cappuccino (₹150) is a favourite. Pair it with the cheesecake in the Coffee & Cake Combo!";
  }
  if (t.includes("thank")) {
    return "You're welcome! ☕";
  }
  return "Sorry, I didn't get that. Try asking about the menu, combos, hours or address.";
}


function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! 👋 I'm the Brewly helper. How can I help you today?" },
  ]);

  function sendMessage(text) {
    if (text.trim() === "") return;
    const userMsg = { from: "user", text: text };
    const botMsg = { from: "bot", text: getReply(text) };
    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <>
      <button className="chat-toggle" onClick={() => setOpen(!open)}>
        {open ? "✕" : <img src="images/chat-logopng.png" alt="Chat with Brewly" />}
      </button>

      {open && (
        <div className="chat-window">
          <div className="chat-header">Brewly Helper ☕</div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <p key={index} className={msg.from === "bot" ? "msg bot" : "msg user"}>
                {msg.text}
              </p>
            ))}
          </div>

          <div className="chat-quick">
            <button onClick={() => sendMessage("Opening hours")}>Hours</button>
            <button onClick={() => sendMessage("Combo offers")}>Combos</button>
            <button onClick={() => sendMessage("Address")}>Address</button>
          </div>

          <form className="chat-form" onSubmit={handleSubmit}>
            <input
              id="input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button type="submit">➤</button>
          </form>
        </div>
      )}
    </>
  );
}

export default Chatbot;