import React, { useState } from 'react';
import {auth, db} from '../firebase'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'

const style = {
  form: `h-14 w-full max-w-[928px]  flex text-xl absolute bottom-0 position: sticky`,
    input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
    button: `w-[20%] bg-green-500`,
};

const SendMessage = ({scroll, currentChatId}) => {
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault()
    if (input === '') {
        alert('Please enter a valid message')
        return
    }
    const {uid, displayName} = auth.currentUser
    await addDoc(collection(db, currentChatId), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp(),
        url: ''
    })
    setInput('')
    scroll.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type='text'
        placeholder='Message'
      />
      <button className={style.button} type='submit'>
        Send
      </button>
    </form>
  );
};

export default SendMessage;