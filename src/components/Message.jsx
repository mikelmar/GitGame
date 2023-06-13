/*import React from 'react';
import {auth} from '../firebase'
const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `absolute mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full text-left`,
  writer: `text-black-600 text-xs`,
  link: `text-white-600 hover:text-blue-800 underline cursor-pointer`,
};

const Message = ({ message }) => {
  const messageClass = 
    message.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.received}`;

  // check if the message is a URL
  //const isURL = message.text.startsWith('http://') || message.text.startsWith('https://');
  const isURL = message.hasOwnProperty('url') && (message.url.startsWith('http://') || message.url.startsWith('https://'));

  return (
    <div>
      <div
        className={`${style.message} ${messageClass}`}
        style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', wordBreak: 'break-all', maxWidth: '45ch' }}
      >
        {isURL ? (
          <div className={style.writer}>
            <p>{message.name}</p>
            <a href={message.url} target="_blank" rel="noopener noreferrer" className={style.link}>{message.text}</a>
          </div>
        ) : (
          <p className={style.writer}>
            {message.name} <br />
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
};

export default Message;*/

import React from 'react';
import { auth } from '../firebase';

const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `absolute mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full text-left`,
  writer: `text-black-600 text-xs`,
  link: `text-white-600 hover:text-blue-800 underline-none cursor-pointer`,
};

const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid ? `${style.sent}` : `${style.received}`;

  // Check if the message has a URL
  const hasURL = message.hasOwnProperty('url') && (message.url.startsWith('http://') || message.url.startsWith('https://'));

  return (
    <div>
      <div
        className={`${style.message} ${messageClass}`}
        style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', wordBreak: 'break-all', maxWidth: '45ch' }}
      >
        {hasURL ? (
          <div className={style.writer}>
            <p>{message.name}</p>
            <a href={message.url} target="_blank" rel="noopener noreferrer" className={style.link}>{message.text}</a>
          </div>
        ) : (
          <p className={style.writer}>
            {message.name} <br />
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
};

export default Message;
