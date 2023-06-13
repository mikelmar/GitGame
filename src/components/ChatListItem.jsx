import React from "react";

const ChatListItem = ({ name, onClick, isSelected }) => {
  const backgroundColor = isSelected ? "lightblue" : "white";
  return <div onClick={onClick} style={{ backgroundColor }}>{name}</div>;
};

export default ChatListItem;

