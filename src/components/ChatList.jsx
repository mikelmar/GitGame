/*
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import ChatListItem from "./ChatListItem";
import {collection, doc} from "firebase/firestore";

import {useCollectionData} from "react-firebase-hooks/firestore";

const ChatList = ({ currentChatId, onChatItemClick }) => {

  const query = collection(db, "oses/macOS/children");
  
  const [docs, loading, error] = useCollectionData(query);
  console.log(docs);
  

  return (
    <div>
      {loading && "Loading..."}

      <ul>
        {docs.map(doc => (
          <div key={Math.random()}><li>Hola</li></div>)
        )}
      </ul>
    </div>
  );
};

export default ChatList;
*/

import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import ChatListItem from "./ChatListItem";
import { collection, query, onSnapshot } from "firebase/firestore";

const ChatList = ({ currentChatId, onChatItemClick }) => {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "chats", "colec", "chats"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      try {
        const documents = [];
        snapshot.forEach((doc) => {
          documents.push({ id: doc.id, data: doc.data() });
        });
        setDocs(documents);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <ul>
        {docs.map((doc) => (
          <ChatListItem
            key={doc.id}
            name={doc.data.name}
            isSelected={currentChatId === doc.id}
            onClick={() => onChatItemClick(doc.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
