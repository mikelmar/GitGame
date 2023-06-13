import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import LogOut from "./LogOut";

const style = {
  nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl`
};

const Navbar = ({ currentChatId, setCurrentChatId }) => {
  const [user] = useAuthState(auth);

  const headingText = currentChatId ? currentChatId : "ChatApp";

  const handleSignOut = () => {
    setCurrentChatId(null); // Restablece el estado del chat actual a null al cerrar la sesión
  };

  return (
    <div className={style.nav}>
      <h1 className={style.heading}>{headingText}</h1>
      {user ? <LogOut onSignOut={handleSignOut} /> : <SignIn />}
    </div>
  );
};

export default Navbar;

/*import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import LogOut from "./LogOut";

const style = {
  nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl`
};

const Navbar = ({ currentChatId }) => {
  const [user] = useAuthState(auth);

  const headingText = currentChatId ? currentChatId : "ChatApp";

  return (
    <div className={style.nav}>
      <h1 className={style.heading}>{headingText}</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;
*/