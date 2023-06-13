import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ChatList from "./components/ChatList";
import Chat from "./components/Chat";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  const [currentChatId, setCurrentChatId] = useState(null);
  const [user] = useAuthState(auth); // Obtén el estado del usuario logueado

  const onChatItemClick = (chatId) => {
    setCurrentChatId(chatId);
  };

  return (
    <div>
      <Navbar currentChatId={currentChatId} setCurrentChatId={setCurrentChatId} />
      {user && ( // Renderiza ChatPage solo si hay un usuario logueado
        <div style={{ display: "flex", height: "100vh" }}>
          <div style={{ flex: 1 }}>
            <ChatList
              currentChatId={currentChatId}
              onChatItemClick={onChatItemClick}
            />
          </div>
          <div style={{ flex: 3, height: "90%", overflow: "auto" }}>
            {currentChatId && <Chat currentChatId={currentChatId} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
/*import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ChatList from "./components/ChatList";
import Chat from "./components/Chat";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  const [currentChatId, setCurrentChatId] = useState(null);
  const [user] = useAuthState(auth); // Obtén el estado del usuario logueado

  const onChatItemClick = (chatId) => {
    setCurrentChatId(chatId);
  };

  return (
    <div>
      <Navbar currentChatId={currentChatId} />
      {user && ( // Renderiza ChatPage solo si hay un usuario logueado
        <div style={{ display: "flex", height: "100vh" }}>
          <div style={{ flex: 1 }}>
            <ChatList
              currentChatId={currentChatId}
              onChatItemClick={onChatItemClick}
            />
          </div>
          <div style={{ flex: 3, height: "90%", overflow: "auto" }}>
            {currentChatId && <Chat currentChatId={currentChatId} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;*/