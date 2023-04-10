import logo from './logo.svg';
import React from "react"
import './App.css';

function App() {
  const [messages, setMessages] = React.useState([1,2])
    /*
     
     * - If there are no unread messages, display "You're all caught up!"
     
     * - If there are > 0 unread messages, display "You have <n> unread
     
     * - If there's exactly 1 unread message, it should read "message"
          
     */
    return (
        <div>
            {
                messages.length === 0 ?
                <h1>You're all caught up!</h1> :
                <h1>
                    You have {messages.length} unread {messages.length > 1 ? "messages" : "message"}
                </h1>
            }
        </div>
    )
}

export default App;
