import React, { useState, useEffect, useRef } from 'react';
import Message from './Message';
import SendMessage from './SendMessage';
import { db } from '../firebase';
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import UploadFile from './UploadFile';

const style = {
  main: `flex flex-col p-[5px] mt-5 overflow-auto mb-10`,
  chatId: `text-lg font-semibold mb-2`,
};

const Chat = ({ currentChatId }) => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, currentChatId), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
      console.log(messages);
    });

    setTimeout(() => {
      scroll.current.scrollIntoView({ behavior: 'smooth' });
    }, 500);
    return () => unsubscribe();
  }, [currentChatId]);

  return (
    <>
      <main className={style.main}>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        <span ref={scroll}></span>
      </main>
      <SendMessage scroll={scroll} currentChatId={currentChatId} />
      <UploadFile currentChatId={currentChatId} />
    </>
  );
};

export default Chat;