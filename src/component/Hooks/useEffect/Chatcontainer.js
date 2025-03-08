import React, { useEffect, useState } from 'react'
import { createConnection } from './Chat';
import { ToastContainer } from "react-toastify";

function ChatRoom({ roomId }) {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');
  
    useEffect(() => {
      const connection = createConnection(serverUrl, roomId);
      connection.connect();
      return () => {
        connection.disconnect();
      };
    }, [roomId, serverUrl]);
  
    return (
      <>
        <label>
          Server URL:{' '}
          <input
            value={serverUrl}
            onChange={e => setServerUrl(e.target.value)}
          />
        </label>
        <h1>Welcome to the {roomId} room!</h1>
      </>
    );
  }
  
export default function Chatcontainer() {
    
    const [roomid, setroomid] = useState('general');
    const [show, setshow] = useState(false);    
  return (
    <div>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomid}
          onChange={e => setroomid(e.target.value)}
        >
          <option value="general">general</option>
          <option value="dsa">DSA talk</option>
          <option value="exam">Exam talk</option>
        </select>
      </label>
      <button onClick={() => setshow(!show)}>
        {show ? 'Close chat' : 'Open chat'}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomid} />}
      <ToastContainer />
    </div>
  )
}
